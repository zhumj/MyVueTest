<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Comp1 from "@/components/Comp1.vue";
import Comp2 from "@/components/Comp2.vue";

@Options({
  components: {
    Comp1,
    Comp2,
  },
})
export default class UserTabView extends Vue {}
</script>

<template>
  <div class="UserTab">
    <h1>{{ $t("which_page", { msg: $route.params.msg }) }}</h1>
    <Comp1 />
    <Comp2 />
  </div>
</template>
