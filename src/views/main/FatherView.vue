<script lang="ts">
import { Vue } from "vue-class-component";

export default class FatherView extends Vue {
  valueFromChild = "";

  funChildCallback = (resule: string) => {
    this.valueFromChild = resule;
  };
  emitChildCallback = (resule: string) => {
    this.valueFromChild = resule;
  };
}
</script>

<template>
  <div class="father">
    <i-twemoji-flag-china class="icon" />
    <h1>
      {{ $t("which_page", { msg: $route.params.msg }) }}
    </h1>
    <Children
      msg="我是父组件传过来的值"
      :funCallback="funChildCallback"
      @emitCallback="emitChildCallback"
    />
    <p>{{ valueFromChild }}</p>
    <Comp1 />
    <Comp2 />
  </div>
</template>

<style lang="scss">
.icon {
  font-size: 10em;
}
</style>
