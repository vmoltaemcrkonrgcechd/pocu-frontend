import { defineStore } from "pinia";
import { weaponAPI } from "./api";
import { ref, computed } from "vue";
import { iWeapon } from "@/shared/types";
import { iFilter } from "@/entities/weapon/types";

export const useStore = defineStore("weapon", () => {
  const weapons = ref<iWeapon[]>([]);
  const quantity = ref<number>(0);
  const rowsPerPage = ref<number>(10);

  const page = ref<number>(0);
  const setPage = (newPage: number): void => {
    page.value = newPage;
    all();
  };
  const offset = computed((): number => page.value * rowsPerPage.value);

  const filter = ref<iFilter>({ attack: null, orderBy: null, weight: null });
  const setFilter = (newFilter: iFilter): void => {
    filter.value = newFilter;
    page.value = 0;
    all();
  };

  const all = (): void => {
    weaponAPI
      .all({
        offset: offset.value,
        limit: rowsPerPage.value,
        ...filter.value,
      })
      .then(({ data }) => {
        weapons.value = data.weapons;
        quantity.value = data.quantity;
      });
  };

  return {
    all,
    weapons,
    quantity,
    rowsPerPage,
    page,
    setPage,
    setFilter,
  };
});
