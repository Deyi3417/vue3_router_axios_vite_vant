<template>
  Home: liudy23's home
  <div>
    <van-image
        round
        height="100px"
        :src="userInfo.avatarUrl"
    />
    <p>欢迎回来，{{ userInfo.username }}</p>
    <p>个人简介: {{ userInfo.profile }}</p>
    <p>星球编号: {{ userInfo.planetCode }}</p>
  </div>
</template>

<script setup>

import {useRoute} from "vue-router";

const route = useRoute()
console.log("test:", route.query)
// const userInfo = JSON.parse(route.query.userInfo)
// const userInfo = JSON.parse(route.query.userInfo)
const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
console.log("userInfo", userInfo)

</script>

<style scoped>

</style>