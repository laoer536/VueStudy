import {flag,sum} from "./aaa.js";  /*从 aaa.js 导入flag*/
if (flag){
  console.log('刘杰蛤蟆皮')
  console.log(sum(50,20))
}

import {Person} from "./aaa.js";  /*从 aaa.js 导入类Person*/
const p = new Person();
p.run()  /*在类里面使用其中方法的方法,一个是直接取用函数，一个是去类里面的函数，使用方法就不同于函数了*/

//自己定义命名其他JS文件(aaa.js)导出的东西儿
import Name from "./aaa.js";
console.log(Name);  /*这个Name就是aaa.js中的name  就是新起了一个名字而已 */

//统一全部导入
import *as aaa from "./aaa.js";
console.log(aaa.flag);
console.log(aaa.num1);
//.......     反正aaa.js中的所有东西都保留在了aaa对象中，直接用点儿取用即可