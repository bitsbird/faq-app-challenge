<template>
  <div :class="$style.Orders">
    <BaseLoading isFullPage v-if="loading" />
    <div v-else>
      <SearchBar placeholder="order reference" v-model="orderReference" />
      <router-link
        tag="span"
        :to="{ name: 'orderDetail', params: { reference: 80 } }"
      >
        <button>Next</button>
      </router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/form/SearchBar.vue';
export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      orderReference: '',
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.$store
      .dispatch('fetchOrders')
      .catch(() => {
        console.log('something went wrong');
      })
      .finally(() => {
        this.loading = false;
      });
  },
  computed: {
    ordersCollection() {
      return this.$store.getters['ordersCollection'];
    },
  },
};
</script>

<style module lang="scss">
.Orders {
  display: flex;
}
</style>
