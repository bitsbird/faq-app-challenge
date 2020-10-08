<template>
  <div :class="$style.GridTwoColumnsLayout">
    <slot>
      <column>column 1</column>
      <column>column 2</column>
    </slot>
  </div>
</template>

<script></script>

<style module lang="scss">
.GridTwoColumnsLayout {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto;
  align-items: stretch;
  grid-template-columns: 1fr;

  @media #{$media-min-tablet} {
    grid-template-columns: auto 1fr;
  }
}
</style>
