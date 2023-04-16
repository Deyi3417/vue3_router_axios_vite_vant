<template>
{{'liudy23 is so handsome'}}
</template>

<script setup>
import axios from "axios";
// 这个配置会将所有以 /api 开头的请求转发到 http://localhost:3001
/*
2023-04-17 加油 你是最棒的
在这个例子中，使用了/api/user这样的地址，而不是直接使用实际的接口地址，Vite会自动将这个地址代理到指定的目标地址。
 */
axios.get('/api/user').then(response => {
  console.log(response.data)
})

</script>

<style- scoped>

</style->