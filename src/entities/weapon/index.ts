import { useStore } from "./store";
import { iFilter, iPagination } from "./types";
import WeaponForm from "./WeaponForm.vue";

export { useStore as useWeaponStore, WeaponForm };

export type { iFilter, iPagination };
