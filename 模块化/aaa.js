let flag = true;

function sum(num1,num2) {
  return num1+num2;
}

// if(flag) {
//   console.log(sum(20,30));
// }
// 导出方式1
export {
  flag,
  sum
}

// // 导出方式2
// export var num1 = 1000;
// export var height = 1.88;

// // 导出函数与类
// export function mul(num1,num2) {
//   return num1*num2;
// }