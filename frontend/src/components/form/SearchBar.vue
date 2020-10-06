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

  .icon {
    transform: translateX($icon-square-height + $spacing-xsmall);
    display: inline-block;
    width: $icon-square-height;
    height: $icon-square-height;
  }

  .field {
    width: 100%;
    padding-left: ($icon-square-height + $spacing-small);
  }
}
</style>
