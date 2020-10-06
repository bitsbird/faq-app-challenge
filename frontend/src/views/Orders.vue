<template>
  <div>
    <BaseLoading isFullPage v-if="loading" />
    <div :class="$style.Orders" v-else>
      <div :class="$style.row">
        <div :class="$style.column">
          <SearchBar placeholder="order reference" v-model="orderReference" />
        </div>
        <div :class="$style.column">
          <BaseButton @click="localSearch" :disabled="isButtonDisabled">
            Next
          </BaseButton>
        </div>
      </div>
      <div v-if="isError" :class="[$style.row, $style.error]">
        {{ error }}
      </div>
      <div v-if="order" :class="$style.row">
        order
      </div>
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
      order: null,
      loading: false,
      error: '',
      errorMessages: {
        notFound: 'Order not found',
      },
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
    isError() {
      return this.error.length > 0;
    },
    isButtonDisabled() {
      return this.orderReference.length === 0;
    },
  },
  methods: {
    localSearch() {
      this.error = '';
      const order = this.$store.getters['getOrderByReference'](
        this.orderReference
      );
      if (!order) {
        this.error = this.errorMessages.notFound;
      }
      this.order = order;
    },
  },
};
</script>

<style module lang="scss">
.Orders {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .row {
    display: flex;
    //margin: ($spacing-base * 5) 0;
    justify-content: center;
    margin-bottom: $spacing-base;
  }

  .error {
    color: $hex-red;
  }

  .column + .column {
    margin-left: $spacing-small;
  }
}
</style>
