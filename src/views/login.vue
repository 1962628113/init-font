<template>
  <div class="login">
    <input type="text" v-model="userEmail" placeholder="请输入邮箱账号" />
    <input type="password" v-model="password" placeholder="请输入密码 " />
    <button class="btn" @click="login" @keydown.13="login()">登陆</button>
  </div>
</template>
<script>
import { loginApi } from "../store/modules/get";
export default {
  name: "login",
  data() {
    return {
      userEmail: "",
      password: ""
    };
  },
  created() {
    let that = this;
    document.onkeydown = function(e) {
      e = window.event || e;
      if (
        that.$route.path == "/login" &&
        (e.code == "Enter" || e.code == "enter")
      ) {
        //验证在登录界面和按得键是回车键enter
        console.log(1111);
        that.login();
      }
    };
  },
  methods: {
    async get() {
      let data = { userEmail: this.userEmail, password: this.password };
      await loginApi(data).then(res => {
        if (res.data == "Success") {
          this.$router.push({ path: "/list" });
        } else {
          alert("账号或密码错误！");
        }
      });
    },
    login() {
      console.log(111);
      this.get();
    }
  }
};
</script>
<style>
.login {
  overflow-y: hidden;
  margin: 0 auto;
  border: 1px solid black;
  width: 375px;
  min-height: 680px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}
.login input {
  padding-left: 20px;
  margin-top: 100px;
  outline: none;
  color: #333333;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #c6cbd4;
}
.btn {
  height: 36px;
  border: none;
  outline: none;
  margin: 27px auto;
  color: #ffffff;
  font-size: 14px;
  background: rgba(51, 102, 255, 1);
  cursor: pointer;
  border-radius: 4px;
}
</style>
