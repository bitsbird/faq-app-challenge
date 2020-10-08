<template>
  <select :class="$style.Dropdown" v-model="selectedValue">
    <option disabled :value="noOption.value">{{ noOption.label }}</option>
    <option
      v-for="option in localOptions"
      :value="option.value"
      :key="option.value"
      >{{ option.label }}</option
    >
  </select>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      required: true,
    },
  },
  computed: {
    noOption() {
      return { label: '', value: '' };
    },
    localOptions() {
      return this.options ? this.options.slice(1) : [];
    },
    selectedValue: {
      set(selected) {
        this.$emit('input', selected);
      },
      get() {
        return this.value;
        debugger; //eslint-disable-line
      },
    },
  },
};
</script>

<style module lang="scss">
.Dropdown {
  @include input-field;
}
</style>
