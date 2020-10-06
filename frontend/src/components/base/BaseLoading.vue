<template>
  <div :class="$style[type]">
    <div :class="$style.Indicator">..Loading</div>
  </div>
</template>
<script>
export default {
  props: {
    isFullPage: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      return this.isFullPage ? 'BaseLoadingFull' : 'BaseLoading';
    },
  },
};
</script>

<style module lang="scss">
%loading {
  @include font-headline-4;
  position: relative;
  background-color: $hex-medium-grey;
  color: $hex-white;
  border-radius: $border-radius;
  padding: $spacing-base;
}
.BaseLoading {
  @extend %loading;
}

.BaseLoadingFull {
  @extend %loading;
  @include layout-fit;
  z-index: $z-index-header;
  border-radius: none;
  padding: 0;
}
.Indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
