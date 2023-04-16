<template>

  <van-nav-bar title="标题"
               left-text="返回"
               left-arrow
               @click-left="onClickLeft"
               @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
  <van-tabbar route @change="onChange">
    <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item name="team" icon="friends-o" to="/team">队伍</van-tabbar-item>
    <van-tabbar-item name="user" icon="user-circle-o" to="/user">个人</van-tabbar-item>
  </van-tabbar>

  <div id="content">
    <router-view/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {Toast} from 'vant';
import { useRouter } from 'vue-router'

const router = useRouter()

const onClickLeft = () => history.back();
const onClickRight = () => {
  router.push({
    path: '/search'
  })
};


// const active = ref(0);
const onChange = (index) => Toast(`标签 ${index}`);
</script>
<style scoped>

</style>