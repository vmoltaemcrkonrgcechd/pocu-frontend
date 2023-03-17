<script lang="ts" setup>
import "./index.css";
import {
  Button,
  Dropdown,
  InputText,
  Table,
  Column,
  Paginator,
  Dialog,
} from "@/shared/ui";
import { Delete, Add, Edit } from "@/shared/icons";
import { ref } from "vue";

const inputTextValue = ref<string>("");

const dropdownValue = ref({ name: "" });

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
  },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="h-screen grid grid-cols-12 grid-rows-6 bg-blue-100 p-3 gap-3">
    <div
      class="card col-span-2 grid grid-cols-2 gap-3 items-center justify-items-center"
    >
      <Button label="Добавить" :icon="Add" />
      <Button label="Удалить" danger :icon="Delete" />
      <Button :icon="Add" />
      <Button danger :icon="Delete" />
    </div>
    <div class="card col-span-2 flex items-center justify-center flex-col">
      <h2 class="title">Ввод текста</h2>
      <InputText label="Электронная почта" v-model="inputTextValue" />
    </div>
    <div class="card col-span-2 flex items-center justify-center flex-col">
      <h2 class="title">Выпадающий список</h2>
      <Dropdown
        v-model="dropdownValue"
        :options="users"
        option-label="name"
        label="Пользователь"
      />
    </div>
    <div
      class="card col-span-6 row-span-2 flex flex-col gap-y-3 justify-center"
    >
      <Table :rows="users">
        <Column header="Идентификатор" field="id" />
        <Column header="Имя" field="name" />
        <Column header="Электронная почта" field="email" />
        <Column header="Действия">
          <span class="h-full flex items-center justify-center gap-y-1 w-full">
            <Button :icon="Edit" pure />
            <Button :icon="Delete" pure />
          </span>
        </Column>
      </Table>
      <Paginator :rows-per-page="10" :total-records="120" />
    </div>
    <div class="card col-span-2 flex items-center justify-center flex-col">
      <h2 class="title">Диалоговое окно</h2>
      <Button label="Открыть" @click="isOpen = true" />
    </div>
    <Dialog v-model="isOpen">
      <form @submit.prevent class="flex flex-col gap-y-6">
        <h2 class="title !mb-0">Добавить</h2>
        <InputText label="Электронная почта" v-model="inputTextValue" />
        <Dropdown
          v-model="dropdownValue"
          :options="users"
          option-label="name"
          label="Пользователь"
        />
        <Button label="Добавить" :icon="Add" />
      </form>
    </Dialog>
  </div>
</template>

<style>
.card {
  @apply bg-white rounded-md shadow-md p-3;
}

.title {
  @apply uppercase font-medium text-blue-600 mb-3 text-center;
}
</style>
