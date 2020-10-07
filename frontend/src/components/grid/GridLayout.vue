<template>
  <div :class="$style.GridLayout" :style="columnStyle">
    <slot>
      <column>column 1</column>
      <column>column 2</column>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    templateColumns: Array,
  },
  computed: {
    columnStyle() {
      if (!this.templateColumns) return {};
      return {
        "grid-template-columns": `${this.templateColumns.join(" ")}`,
      };
    },
  },
};
</script>
  
<style module lang='scss'>
.GridLayout {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: stretch;
}
</style>