<template>
  {{ tags }}
  <van-card
      v-for:="item in userList"
      :desc="item.profile"
      :title="item.username + `(${item.planetCode})`"
      :thumb="item.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in item.tags" v-bind:key="tag" style="margin-right: 8px; margin-top: 8px">{{ tag }}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">详细信息</van-button>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>

</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()
const route = useRoute()
const {tags} = route.query
const mockUser = {
  id: 123,
  username: '刘德意',
  userAccount: 'liudy23',
  avatarUrl: 'https://api2.mubu.com/v3/photo/925eae67-7595-426d-a629-16ff249aaf75.jpg',
  gender: '男',
  phone: '18811553417',
  email: '18811553417@163.com',
  planetCode: '3906',
  createTime: new Date(),
  tags: ['java', 'python', 'c++', 'MySQL'],
  profile: '刘德意，中共党员，毕业于北京邮电大学',
}

const userList = ref([mockUser]);
</script>

<style scoped>

</style>