<template>
  <div class="login-module">
    <div class="input-group user-input">
      <!-- <span class="input-group-addon">用户名</span> -->
      <input type="text" class="form-control" placeholder="请输入用户名" :value="username">
    </div>
    <div class="input-group user-input">
      <!-- <span class="input-group-addon">密码</span> -->
      <input type="password" class="form-control" placeholder="请输入密码" :value="password">
    </div>
    <button type="button user-btn" class="btn btn-success" @click="login">登 录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {

    }
  }
}
</script>

<style lang="scss" scoped>
.login-module{
  .user-input{
    width: 500px;
    float: left;
    input {
      border-radius: 4px;
    }
    margin-right: 20px;
  }
  .user-btn {
    display: inline-block;
  }
}
</style>
