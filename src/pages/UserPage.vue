<template>
  <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username','昵称',user.username)"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link :value="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl)">
    <van-image
        round
        height="50px"
        :src="user.avatarUrl"
    />
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="电话" is-link :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
  <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>


</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: '刘德意123',
  userAccount: 'liudy23',
  avatarUrl: 'https://api2.mubu.com/v3/photo/925eae67-7595-426d-a629-16ff249aaf75.jpg',
  gender: '男',
  phone: '18811553417',
  email: '18811553417@163.com',
  planetCode: '3906',
  createTime: new Date(),
  // string 类型的数组
  tags: ['java', 'python', 'c++'],
  profile: '刘德意，中共党员，毕业于北京邮电大学',
}
const router = useRouter()
const toEdit = (editKey: string, editValue: string, currentValue: string) => {
  router.push({
    path: "/user/edit",
    // 传值
    query: {
      editKey: editKey,
      editValue: editValue,
      currentValue: currentValue,
    }
  })
}

</script>

<style scoped>

</style>