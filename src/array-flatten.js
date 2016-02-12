function arrayFlatten(input) { 'use strict';
    if ((input.constructor !== Array) || (! input.length)) {
        return [];
    }

    var output = [];

    input.forEach(function (element) {
        if (element.constructor === Array) {
            output = output.concat(arrayFlatten(element));

            return;
        }

        output.push(element);
    });

    return output;
}