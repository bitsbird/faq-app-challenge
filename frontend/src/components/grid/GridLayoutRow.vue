<script>
import GridColumn from "./GridLayoutColumn.vue";
export default {
  functional: true,
  render: (createElement, context) => {
    const slots = context.slots();
    const { default: columns } = slots;
    if (!columns) return;

    const renderTree = columns.map((node) => {
      const { children } = node;
      return createElement(GridColumn, {
        scopedSlots: {
          default: () => children,
        },
      });
    });
    return renderTree;
  },
};
</script>