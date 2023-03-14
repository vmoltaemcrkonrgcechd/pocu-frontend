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
  <table>
    <slot />
    <thead>
      <tr>
        <th v-for="col in columns">{{ col.props.header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows">
        <template v-for="col in columns">
          <td v-if="col.children">
            <component v-for="child in col.children" :is="child" :row="row" />
          </td>

          <td v-else>{{ getField(row, col.props.field) }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
