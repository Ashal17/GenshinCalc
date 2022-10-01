function base_convert(input, input_base, output_base) {
    if (input_base == 2 && output_base == 10) {
        return base_convert_2_10(input);
    } else if (input_base == 2 && output_base == 64) {
        return base_convert_2_64(input);
    } else if (input_base == 10 && output_base == 2) {
        return base_convert_10_2(input);
    } else if (input_base == 10 && output_base == 64) {
        return base_convert_10_64(input);
    } else if (input_base == 64 && output_base == 2) {
        return base_convert_64_2(input);
    } else if (input_base == 64 && output_base == 10) {
        return base_convert_64_10(input);
    } 
    throw "Invalid base convert parameters input_base: " + input_base + ", output_base: " + output_base;
}

function base_convert_2_10(input) {
    if (input || input === 0) {
        return parseInt(input, 2);
    } 
    return "";
}

function base_convert_2_64(input) {
    if (input || input === 0) {
        while ((input.length % 6) != 0) {
            input = "0" + input;
        }
        var spl = input.match(/.{1,6}/g);
        var result = "";
        for (var i = 0; i < spl.length; i++) {
            a = parseInt(spl[i], 2);
            result += base_64[a];
        }
        return result;
    } 
    return "";
}

function base_convert_10_2(input) {
    if (input || input === 0) {
        return parseInt(input, 10).toString(2);
    } 
    return "";
}

function base_convert_10_64(input) {
    return base_convert_2_64(base_convert_10_2(input));
}

function base_convert_64_2(input) {
    return base_convert_10_2(base_convert_64_10(input));
}

function base_convert_64_10(input) {
    if (input || input === 0) {
        var spl = input.split("");
        var result = 0;
        for (var i = 0; i < spl.length; i++) {
            a = base_64.indexOf(spl[i]);
            exp = spl.length - i - 1;
            result += a * Math.pow(64, exp);;
        }
        return result.toString();
    } 
    return "";
}

const base_64 = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z", "A", "B", "C", "D",
    "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "_", "-"
]
