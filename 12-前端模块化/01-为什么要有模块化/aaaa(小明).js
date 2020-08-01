//小明
/*var name = '小明';
var age = 22;

function sum(num1,num2) {
  return num1+num2;
};

var flag = true;

if (flag = true) {
  console.log(sum(11,22))
}*/

//避免全局变量重复造成问题可以用闭包解决 → 作用域里面定义自己的变量，不会对其他的JS文件造成影响  弊端：代码变得不可复用，其他JS若要使用，那么就需要重新定义  解决办法：用模块module接收每个JS文件要导出的属性，供其他JS文件使用

var moduleA = (function () {    /*其他JS如果要定义模块 命名需要不一样,例如moduleB*/
  //导出对象
  var obj = {};


  var name = '小明';
  var age = 22;

  function sum(num1,num2) {
    return num1+num2;
  };

  var flag = true;

  if (flag = true) {
    console.log(sum(11,22))
  }

  obj.flag = flag;  /*给obj赋予flag属性*/
  obj.sum = sum;    /*给obj赋予sum函数*/

  return obj;   /*导出的obj对象赋予模块moduleA*/
})()

//或者在最后加
/*module.exports = {    现在不能这么写，必须要有底层的代码解析支持这种写法 才行
  flag,
  sum,
}*/
