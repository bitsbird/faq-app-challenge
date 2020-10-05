<template>
  <header>
    <div :class="$style.Header">The Header</div>
  </header>
</template>

<style module lang="scss">
.Header {
  display: flex;
  align-items: center;
  position: relative;
  height: $header-height;
  background-color: $background-light;
  color: $text-color;

  .Logo {
    padding: $spacing-small;
    flex-grow: 1;
  }
}
</style>
