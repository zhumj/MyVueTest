# script+ts的三种打开方式

## 第一种：<script lang="ts" setup></script>

```
<script lang="ts" setup>
import { defineProps, ref } from 'vue'

// 父组件传过来的值
const props = defineProps({
  id: String
})

const isLoading = ref(false)

function buttonClick(type: number) {
  ...
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
})
export default class Children extends Vue {
  // 父组件传递过来的数据
  msg!: string;

  function buttonClick(type: number) {
    ...
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
  setup(props) {
    const state: {
      isLoading: boolean;
    } = reactive(
      {
        isLoading: false,
      }
    )

    function onButtonClick() {
      ...
    }

    return { onButtonClick }
  }
})
</script>
```
