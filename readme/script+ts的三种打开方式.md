# script+ts的三种打开方式

## 第一种：<script lang="ts" setup></script>

```
<script lang="ts" setup>
import { defineProps, defineEmit, ref } from 'vue'

// 父组件传过来的值
const props = defineProps({
  id: String
})

// 定义向父组件传值的方法
const emit = defineEmit<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const isLoading = ref(false)

function buttonClick(type: number) {
  emit('change', 3)
}
</script>
```

## 第二种: vue-class-component

```
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  // 子传父
  emits: [
    'callBack'
  ],
})
export default class Children extends Vue {
  // 父组件传递过来的数据
  msg!: string;

  function buttonClick(type: number) {
    this.$emit("callBack", type);
  }
}
</script>
```

## 第三种：最原始

```
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // 父组件传递过来的值
    id: {
      type: String as PropType<string>,
      default: ''
    }
  },
  // 子传父
  emits: [
    'callBack'
  ],
  setup(props, { emit }) {
    const state: {
      isLoading: boolean;
    } = reactive(
      {
        isLoading: false,
      }
    )

    function onButtonClick() {
      emit('callBack', params)
    }

    return { onButtonClick }
  }
})
</script>
```
