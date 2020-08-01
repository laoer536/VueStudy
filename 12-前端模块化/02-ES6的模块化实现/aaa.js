var name = '小明';
var age = 22;
var flag = true;

function sum(num1,num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20,50))
};

//导出方式1
export {    /*导出flag和sum函数*/
  flag,
    sum   /*导出的属性在其他任何JS文件中都可以选择性的导入使用或者不使用*/
}

//导出方式2
export var num1 = 1000;  /*一开始定义时就导出*/
export  function mul(num1,num2) {  /*导出函数*/
  return num1 + num2
}

export class Person {    /*导出类*/
  run(){
    console.log('在奔跑')
  }
}

//导出方式3  (当该JS文件只有一个需要导出的值，而且他JS文件中并不想以该导出的东西儿名字来继续使用的时候)
export default name;
