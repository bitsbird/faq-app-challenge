<template>
  <div :class="$style.SearchBar">
    <span :class="$style.icon"><SearchIcon /></span>
    <input
      v-model="localValue"
      type="text"
      :class="$style.field"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import SearchIcon from '@/components/SearchIcon.vue';
export default {
  components: {
    SearchIcon,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: String,
  },
  computed: {
    localValue: {
      set(localValue) {
        this.$emit('input', localValue);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>

<style module lang="scss">
.SearchBar {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .icon {
    position: absolute;
    left: $spacing-xsmall;
    top: 50%;
    transform: translateY(-50%);
    width: $icon-square-height;
    height: $icon-square-height;
  }

  .field {
    @include input-field;
    padding: $spacing-base;
    padding-left: ($icon-square-height + $spacing-base);
  }
}
</style>
