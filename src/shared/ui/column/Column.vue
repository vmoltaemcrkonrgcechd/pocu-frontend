<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    header: String as PropType<string>,

    field: {
      type: String as PropType<string | null>,
      default: () => null,
    },
  },

  render() {
    return null;
  },
});
</script>
