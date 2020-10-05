<template>
  <div :class="$style.Orders">
    <input :class="$style.SearchBar" type="search" placeholder="search" />
    <button>Next</button>
    <ul>
      <li v-for="order in orders" :key="order.reference">
        {{ order.reference }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetch } from '@/api/ordersService';
export default {
  data() {
    return {
      orderReference: null,
      orders: [],
    };
  },
  created() {
    fetch().then((orders) => {
      this.orders = orders;
    });
  },
};
</script>

<style module lang="scss">
.Orders {
  display: flex;

  .SearchBar {
    min-width: 400px;
  }
}
</style>
