'use strict';

exports.mean = function(arr) {
  var sum = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }
  return (sum / arr.length);
};

exports.median = function(arr) {
  // sort the array
  arr.sort(function(a, b) {
    return a - b;
  });

  // myNum: index of middle/rtMiddle number in arr
  var myNum = Math.floor(arr.length / 2);

  // if odd length, choose the middle number
  if (arr.length % 2 === 1) {
    return arr[myNum];
  }
  // else (it's even){ choose the middle two and mean them }
  else {
    return (arr[myNum - 1] + arr[myNum]) / 2;
  }
};

exports.mode = function(array) {
  var count = {};
  var highest = 0;
  var winnerArr = [];

  //count each number in the array
  for (var i = 0, len = array.length; i < len; i++) {
    var num = array[i];
    count[num] = (count[num] || 0) + 1;
  }
  //check against highest, replace if its higher
  // TODO - Eliminate these for in loops!
  for (var prop in count) {
    if (count[prop] >= highest) {
      highest = count[prop];
    }
  }
  //go through property counts pushes to array
  for (var property in count) {
    if (count[property] === highest) {
      winnerArr.push(property);
    }
  }

  return winnerArr.toString();
};
