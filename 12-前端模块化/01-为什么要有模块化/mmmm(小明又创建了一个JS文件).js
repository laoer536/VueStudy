;(function () {
  //想使用flag
  if (moduleA.flag) {
    console.log('小明是天才，牛逼！');  /*不会打印，因为小红的JS文件改了flag的值为false，要为true才会执行*/   /*这就是全局变量命名冲突的问题*/
  }

  //想使用sum函数
  console.log(moduleA.sum(40,50))
})()