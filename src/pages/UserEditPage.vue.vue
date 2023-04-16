<template>
  <!--
  在Vue3中，:name="" 是一种简写语法，用于绑定属性。它实际上等同于 v-bind:name=""，其中 name 是需要绑定的属性名，
  而 "" 则是需要绑定的属性值，可以是一个变量或者是一个表达式。
            :placeholder="`请输入` + editUser.editValue"

  -->
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editValue"
          :placeholder="`请输入${editUser.editValue}`"
          :rules="[{ required: true, message: `请填写${editUser.editValue}` }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup>
import {ref} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute()
// ref: 在Vue3中，ref是一个函数，它接受一个初始值并返回一个响应式对象。
console.log('test console.log() === ${route.query}', route.query, '--')
const editUser = ref({
  editKey: route.query.editKey,
  editValue: route.query.editValue,
  currentValue: route.query.currentValue
})
const onSubmit = (values) => {
  console.log('submit', values);
};
</script>

<style scoped>

</style>