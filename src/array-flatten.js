function arrayFlatten(input) { 'use strict';
    if ((input.constructor !== Array) || (! input.length)) {
        return [];
    }

    return input.reduce(function (output, element) {
        if (element.constructor === Array) {
            return output.concat(arrayFlatten(element));
        }

        output.push(element)

        return output;
    }, []);
}