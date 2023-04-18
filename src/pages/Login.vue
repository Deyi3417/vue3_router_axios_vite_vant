<template>

  <div class="login-page">
    <div class="login-container">
      <h1 style="text-align: center">Welcome九夏光年</h1>
      <van-form @submit="login" ref="form" label-width="80px">
        <van-cell-group inset>
          <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin-top: 10px;">
          <van-button round block type="primary" native-type="submit">
            Login
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import request from "@/utils/Request";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute()

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await request.post("/api/user/login", {
          username: this.username,
          password: this.password,
        }).then((response) => {
          console.log("执行了：token {}", response.data)
          localStorage.setItem('token', response.data.token)
          // 可以将传过来的数据保存到本地-存储字符串格式的数据，并且可以长期保存
          localStorage.setItem('userInfo', JSON.stringify(response.data))
          this.$router.push({
            // 跳转到首页
            path: '/',
            // 可以不这样传过去，使用localStorage保存到本地然后再访问即可
            // query: {
            //   userInfo: JSON.stringify(response.data)
            // }
          });
        });
        console.log("执行了-liudy23---")
        // localStorage.setItem("token", response.data.token);
        // this.$router.push("/");
      } catch (error) {
        console.log("执行了---liudy23---")
        console.error(error);
      }
    },
  },
};
</script>


<style>
.login-page {
  background-color: #efd7e5; /* 设置页面背景颜色 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 设置高度为100vh，占满整个屏幕 */
}
.login-container {
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}


/*.login-container {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  height: 100vh;*/
/*}*/
/*body {*/
/*  background-color: pink;*/
/*}*/
</style>
