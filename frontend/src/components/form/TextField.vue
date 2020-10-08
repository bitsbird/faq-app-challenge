<template>
  <input
    :class="$style.TextField"
    v-model="localValue"
    type="text"
    class="$style.TextField"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
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
.TextField {
  @include input-field;
}
</style>
