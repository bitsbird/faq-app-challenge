<template functional>
  <footer>
    <div :class="$style.Footer">The Footer</div>
  </footer>
</template>

<style module lang="scss">
.Footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: $header-height;
  background-color: $background-light;
  color: $text-color;
}
</style>
