import { defineStore } from "pinia";
import { weaponAPI } from "./api";
import { ref } from "vue";
import { iWeapon } from "@/shared/types";

export const useStore = defineStore("weapon", () => {
  const weapons = ref<iWeapon[]>([]);

  const all = (): void => {
    weaponAPI.all().then(({ data }) => {
      weapons.value = data.weapons;
    });
  };

  return {
    all,
    weapons,
  };
});
