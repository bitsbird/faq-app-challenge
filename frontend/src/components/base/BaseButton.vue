<template functional>
  <button :class="$style.BaseButton" v-bind="data.attrs" v-on="listeners">
    <slot>Base Button</slot>
  </button>
</template>

<style module lang="scss">
.BaseButton {
  @include base-font;
  border: 1px solid $hex-medium-grey;
  border-radius: $border-radius;
  background-color: $hex-white;
  padding: $spacing-small $spacing-base;
  color: $text-color;
  display: inline-block;
  white-space: nowrap;
  & + & {
    margin-left: $spacing-small;
  }

  &:disabled {
    background-color: $hex-medium-grey;
    color: $hex-light-grey;
  }
}
</style>
