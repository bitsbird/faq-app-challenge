<template>
  <div :class="$style.ContactForm">
    <h1 :class="$style.title">Contact Form</h1>
    <form name="contact-form">
      <Table>
        <TableRow>
          <formLabel>
            <span :class="$style.label">Order Reference</span>
          </formLabel>
          <formField>
            <span :class="$style.field">
              <Dropdown
                v-model="model.orderReference"
                :options="orderReferenceOptions"
              />
            </span>
          </formField>
        </TableRow>
        <TableRow>
          <formLabel>
            <span :class="$style.label">Name</span>
          </formLabel>
          <formField>
            <span :class="$style.field">
              <TextField v-model="model.name" placeholder="random user" />
            </span>
          </formField>
        </TableRow>
        <TableRow>
          <formLabel>
            <span :class="$style.label">Phone</span>
          </formLabel>
          <formField>
            <span :class="$style.field">
              <TextField v-model="model.phone" placeholder="random user" />
            </span>
          </formField>
        </TableRow>
        <TableRow>
          <formLabel>
            <span :class="$style.label">Email</span>
          </formLabel>
          <formField>
            <span :class="$style.field">
              <TextField v-model="model.email" placeholder="random@gmail.com" />
            </span>
          </formField>
        </TableRow>
        <TableRow>
          <formLabel>
            <span :class="$style.label">Message</span>
          </formLabel>
          <formField>
            <span :class="$style.field">
              <TextArea v-model="model.message"></TextArea>
            </span>
          </formField>
        </TableRow>
        <TableRow>
          <emptyColumn />
          <formField>
            <span :class="[$style.field, $style.submit]">
              <BaseButton> Submit</BaseButton>
            </span>
          </formField>
        </TableRow>
      </Table>
    </form>
  </div>
</template>

<script>
import Dropdown from '@/components/form/Dropdown.vue';
import TextField from '@/components/form/TextField.vue';
import TextArea from '@/components/form/TextArea.vue';
import Table from '@/components/grid/GridTwoColumnsLayout.vue';
import TableRow from '@/components/grid/GridLayoutRow.vue';
export default {
  components: {
    Dropdown,
    TextField,
    TextArea,
    Table,
    TableRow,
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
  data() {
    return {
      loading: false,
      model: {
        orderReference: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    };
  },
  computed: {
    orderReferenceOptions() {
      const orderRefs = this.$store.getters['orderReferences'];
      if (!orderRefs) return [];
      const options = orderRefs.map((ref) => {
        return {
          label: ref,
          value: ref,
        };
      });
      return options;
    },
  },
};
</script>

<style module lang="scss">
.ContactForm {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: auto;

  .title {
    text-align: center;
  }
  .label {
    display: inline-block;
    padding-bottom: $spacing-small;
    color: $hex-medium-grey;

    @media #{$media-min-tablet} {
      padding: $spacing-small 0;
    }
  }
  .field {
    display: inline-block;
    width: 100%;
    padding-bottom: $spacing-medium;

    @media #{$media-min-tablet} {
      padding: $spacing-small 0 $spacing-small $spacing-small;
    }
  }

  .submit {
    text-align: right;
  }
}
</style>
