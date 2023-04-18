<template>
<!--  <div class="login">-->
<!--    <h1>Login</h1>-->
<!--    <form @submit.prevent="login">-->
<!--      <div>-->
<!--        <label>Username:</label>-->
<!--        <input v-model="username" type="text" />-->
<!--      </div>-->
<!--      <div>-->
<!--        <label>Password:</label>-->
<!--        <input v-model="password" type="password" />-->
<!--      </div>-->
<!--      <button type="submit">Login</button>-->
<!--    </form>-->
<!--  </div>-->

<!--  <van-form @submit="login" v-model="formData" ref="form" label-width="80px" style="margin: 20px">-->
<!--    <van-field-->
<!--        v-model="formData.username"-->
<!--        name="username"-->
<!--        label="用户名"-->
<!--        placeholder="请输入用户名"-->
<!--        :rules="[{ required: true, message: '请输入用户名' }]"-->
<!--    />-->
<!--    <van-field-->
<!--        v-model="formData.password"-->
<!--        name="password"-->
<!--        label="密码"-->
<!--        type="password"-->
<!--        placeholder="请输入密码"-->
<!--        :rules="[{ required: true, message: '请输入密码' }]"-->
<!--    />-->
<!--    <van-button type="primary" style="margin-top: 20px" @click="login">登录</van-button>-->
<!--  </van-form>-->


  <van-form @submit="login" ref="form" label-width="80px" style="margin: 20px;margin-top: 120px">
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
    <div style="margin-top: 5px;">
      <van-button round block  type="primary" native-type="submit">
        Login
      </van-button>
    </div>
  </van-form>

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
        const response = await axios.post("/api/login", {
          username: this.username,
          password: this.password,
        }).then((response) =>{
          localStorage.setItem('token',response.data.token)
          router.push("/")
        });
        // localStorage.setItem("token", response.data.token);
        // this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>



<style>

.container {
  display: flex;
  justify-content: center;
}
</style>
