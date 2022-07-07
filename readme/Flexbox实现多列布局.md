# Flexbox实现多列布局

```
<template>
  <div v-for="i in 5" :key="i" class="Container">
    <p class="Child">我是第{{ i }}栏</p>
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
