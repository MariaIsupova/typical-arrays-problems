exports.min = function min(array) {
  if (typeof array !== 'undefined' && array.length > 0) {
      return Math.min.apply(Math, array)
  }
  return 0
}

exports.max = function max(array) {
  if (typeof array !== 'undefined' && array.length > 0) {
      return Math.max.apply(Math, array)
  }
  return 0
}

exports.avg = function avg(array) {
  if (typeof array !== 'undefined' && array.length > 0) {
      var sum = 0;
      array.forEach(num => {
          sum += num;
      });
      return sum / array.length
  }
  return 0
}

function min(array) {
  console.log(Math.min.apply(Math, array))
  return Math.min.apply(Math, array);
}

mini = min([])
