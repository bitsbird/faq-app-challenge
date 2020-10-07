<template functional>
  <div :class="$style.GridLayoutColumn">
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.GridLayoutColumn {
  padding: 0.5rem;
  word-break: break-word;
  color: $hex-dark-grey;
}
</style>

