# 用el-row和el-col自定义分栏数

## 很简单，把 el-col 的 span 设置为大于 24，再用 width 定义百分比宽度

### 5栏
```
<el-row>
  <el-col :span="25" style="width: 20%">
    <p>栏目1</p>
  </el-col>
  <el-col :span="25" style="width: 20%">
    <p>栏目2</p>
  </el-col>
  <el-col :span="25" style="width: 20%">
    <p>栏目3</p>
  </el-col>
  <el-col :span="25" style="width: 20%">
    <p>栏目4</p>
  </el-col>
  <el-col :span="25" style="width: 20%">
    <p>栏目5</p>
  </el-col>
</el-row>
```

### 7栏
```
<el-row>
  <el-col :span="25" style="width: 14.28%">
    <p>栏目1</p>
  </el-col>
  <el-col :span="25" style="width: 14.28%">
    <p>栏目2</p>
  </el-col>
  <el-col :span="25" style="width: 14.28%">
    <p>栏目3</p>
  </el-col>
  <el-col :span="25" style="width: 14.28%">
    <p>栏目4</p>
  </el-col>
  <el-col :span="25" style="width: 14.28%">
    <p>栏目5</p>
  </el-col>
  <el-col :span="25" style="width: 14.28%">
    <p>栏目6</p>
  </el-col>
  <el-col :span="25" style="width: 14.28%">
    <p>栏目7</p>
  </el-col>
</el-row>
```
