<template>
  <div :class="$style.Order">
    <h4>Order detail</h4>
    <OrderTable>
      <OrderTableRow>
        <OrderTableColumn> Reference </OrderTableColumn>
        <OrderTableColumn>
          {{ order.reference }}
        </OrderTableColumn>
      </OrderTableRow>
      <OrderTableRow>
        <OrderTableColumn> Date </OrderTableColumn>
        <OrderTableColumn>
          {{ formattedDate }}
        </OrderTableColumn>
      </OrderTableRow>
      <OrderTableRow>
        <OrderTableColumn> Delivered </OrderTableColumn>
        <OrderTableColumn>
          {{ formattedDelivery }}
        </OrderTableColumn>
      </OrderTableRow>
      <OrderTableRow>
        <OrderTableColumn> Cost </OrderTableColumn>
        <OrderTableColumn>
          {{ formattedCost }}
        </OrderTableColumn>
      </OrderTableRow>
    </OrderTable>
  </div>
</template>

<script>
import { Utils } from '@/Utils';
import OrderTable from '@/components/grid/GridTwoColumnsLayout.vue';
import OrderTableRow from '@/components/grid/GridLayoutRow.vue';
export default {
  components: {
    OrderTable,
    OrderTableRow,
  },
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

  .label {
    @include base-font;
    font-weight: 500;
  }
  .value {
    @include base-font;
  }
}
</style>
