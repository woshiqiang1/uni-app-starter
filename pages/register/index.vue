<script>
export default {
  data() {
    return {
      phone: "",
      smsCode: "",
      password: "",
      passwordRepeat: "",
    };
  },
};
</script>

<template>
  <view class="main">
    <uv-input
      v-model="phone"
      placeholder="请输入手机号"
      :customStyle="{
        marginBottom: '20px',
        width: '220px',
        backgroundColor: '#fff',
      }"
      clearable
    />
    <view class="sms-button-container">
      <uv-input
        type="password"
        v-model="smsCode"
        placeholder="请输入验证码"
        :customStyle="{
          flexBasis: '120px',
          flexGrow: 0,
          backgroundColor: '#fff',
        }"
        clearable
      />
      <uv-button type="primary" size="mini" style="margin-left: 20px" :disabled="false">
        获取验证码
      </uv-button>
    </view>

    <uv-input
      type="password"
      v-model="password"
      placeholder="请输入密码"
      :customStyle="{
        marginBottom: '20px',
        width: '220px',
        backgroundColor: '#fff',
      }"
      clearable
    />
    <uv-input
      type="password"
      v-model="passwordRepeat"
      placeholder="请再次输入密码"
      :customStyle="{
        marginBottom: '20px',
        width: '220px',
        backgroundColor: '#fff',
      }"
      clearable
    />
    <uv-button type="primary" :customStyle="{ width: '260px' }" @click="">
      注册
    </uv-button>
  </view>
</template>

<style lang="scss">
.main {
  padding: 50px 16px 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sms-button-container {
    margin-bottom: 20px;
    width: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
