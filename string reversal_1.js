var stringReversal = function(string) {
    var reverse = " ";

    for(let characters of string) {
        reverse = characters + reverse;
    }
    return reverse;
}

stringReversal("varsha");