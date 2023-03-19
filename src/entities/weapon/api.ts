import { instance } from "@/shared/api-instance";
import { AxiosResponse } from "axios";
import { iAllWeaponsDTO, iWeaponDTO } from "@/shared/types";
import { iAllQP } from "./types";

const add = (dto: iWeaponDTO): Promise<AxiosResponse<void>> => {
  return instance.post("/weapons", dto);
};

const remove = (id: number): Promise<AxiosResponse<void>> => {
  return instance.delete(`/weapons/${id}`);
};

const edit = (dto: iWeaponDTO, id: number): Promise<AxiosResponse<void>> => {
  return instance.patch(`/weapons/${id}`, dto);
};

const all = (qp: iAllQP): Promise<AxiosResponse<iAllWeaponsDTO>> => {
  return instance.get("/weapons", { params: qp });
};

export const weaponAPI = {
  add,
  all,
  remove,
  edit,
};
