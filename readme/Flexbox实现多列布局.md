# Flexbox实现多列布局

## 多列
```
<template>
  <div class="Container">
    <p v-for="i in 5" :key="i" class="Child">我是第{{ i }}栏</p>
  </div>
</template>

<style lang="scss">
.Container {
  display: flex;
}

.Child {
  flex: 1;
}
</style>
```

## 多行多列
```
<template>
  <div class="Container">
    <p v-for="i in 8" :key="i" class="Child">我是第{{ i }}栏</p>
  </div>
</template>

<style lang="scss">
.Container {
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
}

.Child {
  flex: 20%;// 最小宽度为20%，经测试这样设置之后一行排5列，多余的会自动排版到下一行
}
</style>
```
**使用以上做多行多列的时候，如果每行排5列，但是最后一行少于5列的时候，最后一行也会占满宽度，和前面行的Item宽度不统一**
