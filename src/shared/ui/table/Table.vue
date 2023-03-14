<script lang="ts" setup>
import { defineProps, PropType, computed, useSlots } from "vue";

type row = { [key: string]: any };

defineProps({
  rows: {
    type: Array as PropType<row[]>,
    default: () => [],
  },
});

const slots = useSlots();

const getField = (row: row, field: string) => {
  let val: any = null;

  field.split(".").forEach((el) => {
    val = val === null ? row[el] : val[el];
  });

  return val;
};

const columns = computed(() => slots.default?.());
</script>

<template>
  <table
    class="w-full bg-white shadow-md rounded-lg text-sm border-collapse overflow-hidden"
  >
    <slot />
    <thead class="shadow-md">
      <tr class="bg-blue-400 text-white uppercase">
        <th class="cell" v-for="col in columns">{{ col.props.header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="even:bg-blue-100" v-for="row in rows">
        <template v-for="col in columns">
          <td v-if="col.children">
            <component v-for="child in col.children" :is="child" :row="row" />
          </td>

          <td class="cell border-l first:border-none text-gray-900" v-else>
            {{ getField(row, col.props.field) ?? `нет данных` }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.cell {
  @apply py-3
	px-4
	border-blue-300
	whitespace-nowrap;
}
</style>
