<template>
  <div :class="$style.Order">
    <h4>Order detail</h4>
    <div :class="$style.row">
      <div :class="[$style.column, $style.label]">Reference</div>
      <div :class="[$style.column, $style.value]">{{ order.reference }}</div>
    </div>
    <div :class="$style.row">
      <div :class="[$style.column, $style.label]">Date</div>
      <div :class="[$style.column, $style.value]">{{ formattedDate }}</div>
    </div>
    <div :class="$style.row">
      <div :class="[$style.column, $style.label]">Delivered</div>
      <div :class="[$style.column, $style.value]">{{ formattedDelivery }}</div>
    </div>
    <div :class="$style.row">
      <div :class="[$style.column, $style.label]">Cost</div>
      <div :class="[$style.column, $style.value]">{{ formattedCost }}</div>
    </div>
  </div>
</template>

<script>
import { Utils } from '@/Utils';
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return Utils.formattedDate(this.order.date);
    },
    formattedCost() {
      return Utils.formattedAmount(this.order.cost);
    },
    formattedDelivery() {
      return this.order.delivered ? 'yes' : 'no';
    },
  },
};
</script>

<style module lang="scss">
.Order {
  @include box-wrapper;
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
    justify-content: space-between;
  }

  .column + .column {
    margin-left: $spacing-medium;
  }

  .label {
    @include base-font;
    font-weight: 500;
  }
  .value {
    @include base-font;
  }
}
</style>
