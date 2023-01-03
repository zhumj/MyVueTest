<template>
  <div class="base_view">
    <el-input
      class="search_input"
      v-model="searchValue"
      :placeholder="$t('search')"
      clearable
      @change="onSearchChange"
    />
    <div style="font-size: 21px; background-color: blueviolet">heihei</div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";

interface DataEntity {
  id: number;
  parentId: number;
  name: string;
  children: DataEntity[];
}

/**
 * 原始数据，一股脑的列表数据
 */
const rawDataList: DataEntity[] = [];
/**
 * 树形数据，由原始数据转成
 */
const treeDataList: DataEntity[] = [];
/**
 * 树形数据复制体，用于进行操作
 */
const treeDataShowList = ref<DataEntity[]>([]);
/**
 * 搜索关键词
 */
const searchValue = ref("");

onBeforeMount(() => {
  getRawDataList();
});

/**
 * 获取原始数据
 */
const getRawDataList = () => {
  rawDataList.length = 0;
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      rawDataList.push({
        id: 0,
        parentId: -1,
        name: "0",
        children: [],
      });
    } else {
      rawDataList.push({
        id: i,
        parentId: i - 1,
        name: `0-${i}`,
        children: [],
      });
      for (let k = 1; k < 4; k++) {
        const c: any = `${i}${k}`;
        rawDataList.push({
          id: c - 0,
          parentId: i,
          name: `0-${i}-${k}`,
          children: [],
        });
        for (let n = 1; n < 4; n++) {
          const cc: any = `${i}${k}${n}`;
          rawDataList.push({
            id: cc - 0,
            parentId: c - 0,
            name: `0-${i}-${k}-${n}`,
            children: [],
          });
        }
      }
    }
  }
  console.log("11111111111111 getRawDataList rawDataList =", rawDataList);
  treeResolver();
};

/**
 * 原始数据解析成树形数据
 */
const treeResolver = () => {
  treeDataList.length = 0;
  console.log("11111111111111 treeResolver treeDataList =", treeDataList);
  treeDataShowList.value = JSON.parse(JSON.stringify(treeDataList));
  console.log(
    "11111111111111 treeResolver treeDataShowList =",
    treeDataShowList.value
  );
};

/**
 * 搜索关键词改变
 */
const onSearchChange = () => {
  console.log("11111111111111 onSearchChange searchValue =", searchValue.value);
};
</script>

<style scoped>
.base_view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
}

.search_input {
  width: 30%;
  height: 45px;
}
</style>
