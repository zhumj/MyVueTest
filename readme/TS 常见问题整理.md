# TS 常见问题整理
原文: [https://juejin.im/post/5e33fcd06fb9a02fc767c427](https://juejin.im/post/5e33fcd06fb9a02fc767c427)

## 枚举


+ ### 特点
- 是只读属性，无法修改
- 枚举成员值默认从 0 开始递增，可以自定义设置初始值
```
enum Gender {
  BOY = 1,
  GRIL
}
console.log(Gender);// { '1': 'BOY', '2': 'GRIL', BOY: 1, GRIL: 2 }
```

+ ### 成员值
- 可以没有初始值
- 可以是一个对常量成员的引用
- 可以是一个常量表达式
- 也可以是一个非常量表达式
```
enum Char {
  // const member 常量成员：在编译阶段被计算出结果
  a,				 // 没有初始值
  b = Char.a,// 对常量成员的引用
  c = 1 + 3, // 常量表达式

  // computed member 计算成员：表达式保留到程序的执行阶段
  d = Math.random(),// 非常量表达式
  e = '123'.length,
  // 紧跟在计算成员后面的枚举成员必须有初始值
  f = 6,
  g
}
```

## 空值合并运算符的使用
```
const data = {
    str:'',
    // num:0,
    flag:false,
    // flag: null,
};

// data.str 为 "" 时
let str1 = data.str || '空' // '空'
// data.num 为 0 时
let num1 =  data.num || 666 // 666
// data.flag 为 false 时
let status1 =  data.flag || true  // true

// data.str 为 "" 时，可以通过。仅在 str 为 undefined 或者 null 时，不可以通过
let st2r = data.str ?? '空';  
// data.num 为 0 时，可以通过。仅在 num 为 undefined 或者 null 时，不可以通过
let num2 = data.num ?? 666; 
// data.flag 为 false 时，可以通过。仅在 flag 为 undefined 或者 null 时，不可以通过
let status2 = data.flag ?? true;
```
