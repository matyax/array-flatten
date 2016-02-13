QUnit.test('Processes arrays', function( assert ) {
  var input = [[1, 2, [3, [4, [5]]]], 6];

  assert.equal(arrayFlatten(input).length, 6, 'Array flattened');
});

QUnit.test('Validates input', function( assert ) {
  var input = 'string';

  assert.equal(arrayFlatten(input).length, 0, 'Doesn\'t fail with bad data');
});