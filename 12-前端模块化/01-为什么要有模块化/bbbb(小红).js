//小红
/*
var name = '小红';
var flag = false;

console.log(name);
*/

//避免全局变量重复造成问题可以用闭包解决
(function () {
  var name = '小红';
  var flag = false;

  console.log(name);
})()