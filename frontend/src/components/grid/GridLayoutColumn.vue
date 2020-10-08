<template functional>
  <div :class="$style.GridLayoutColumn">
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.GridLayoutColumn {
  word-break: break-word;
  color: $hex-dark-grey;
}
</style>
