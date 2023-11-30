<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
      checkboxValue: [],
    };
  },
};
</script>

<template>
  <view class="main">
    <uv-input
      v-model="phone"
      placeholder="请输入手机号"
      clearable
      shape="circle"
      :customStyle="{
        marginBottom: '20px',
        width: '220px',
        backgroundColor: '#fff',
      }"
    />
    <uv-input
      v-model="password"
      placeholder="请输入密码"
      type="password"
      clearable
      shape="circle"
      :customStyle="{
        marginBottom: '20px',
        width: '220px',
        backgroundColor: '#fff',
      }"
    />
    <view class="nav-link-container">
      <navigator
        url="/pages/forget-password/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        忘记密码
      </navigator>

      <navigator
        url="/pages/register/index"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        立即注册
      </navigator>
    </view>

    <uv-button type="primary" :customStyle="{ width: '260px' }" @click="">
      登录
    </uv-button>

    <view class="agreement-check-container">
      <uv-checkbox-group v-model="checkboxValue">
        <uv-checkbox shape="circle" :key="1" />
      </uv-checkbox-group>
      <view class="agreement">我已阅读并同意 《用户协议》 和 《隐私协议》</view>
    </view>
  </view>
</template>

<style lang="scss">
.main {
  padding: 50px 16px 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-link-container {
    width: 260px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .agreement-check-container {
    width: calc(100vw - 32px);
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .uv-checkbox-group {
      flex-grow: 0;
    }

    .agreement {
      margin-left: 0px;
      text-align: center;
    }
  }
}
</style>
