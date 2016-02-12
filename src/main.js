(function (global) {
  'use strict';

  var input  = [[1, 2, [3, [4, [5]]]], 6],
      output = arrayFlatten(input);

  console.log(output);

})(window);