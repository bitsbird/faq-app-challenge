<template>
  <textarea
    :class="$style.TextArea"
    v-model="localValue"
    type="text"
    class="$style.TextArea"
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
.TextArea {
  @include input-field;
  height: $input-height * 3;
  resize: none;
}
</style>
