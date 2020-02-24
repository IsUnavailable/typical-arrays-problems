
exports.min = function min (array) {
  if (!Array.isArray(array))
    return 0;

  array.sort((a,b) => a - b);  
  return array.length > 0 ? array[0] : 0;  
}

exports.max = function max (array) {
  if (!Array.isArray(array))
    return 0;

  array.sort((a,b) => b - a);
  return array.length > 0 ? array[0] : 0;
}

exports.avg = function avg (array) {  
  let sum = 0;

  if (!Array.isArray(array))
    return 0;

  array.forEach((item, index, array) => sum += item);
  return array.length > 0 ? sum / array.length : 0;
}
