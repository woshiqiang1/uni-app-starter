<script>
export default {
  data() {
    return {
      videoUrl: ''
    }
  },

  methods: {
    gotoLogin() {
      uni.navigateTo({ url: '/pages/login/index' })
    },

    gotoHome() {
      uni.switchTab({ url: '/pages/tab-bar/home-page/index' })
    },

    test() {
      console.log('uni.$uv--->', uni.$uv.os())
      this.$refs.modal.open()
    }
  }
}
</script>

<template>
  <view class="main">
    <template>
      <uv-button
        type="primary"
        @click="gotoLogin"
      >
        登录
      </uv-button>
      <uv-button
        type="error"
        @click="gotoHome"
      >
        首页
      </uv-button>
    </template>

    <template v-if="false">
      <view>Video URL:</view>
      <uv-input
        v-model="videoUrl"
        placeholder="请输入内容"
        clearable
      />

      <video
        v-if="true"
        id="myVideo"
        :src="videoUrl"
        controls
      ></video>
    </template>

    <uv-modal
      ref="modal"
      title="标题"
      @confirm=""
      :zoom="false"
    >
      <view class="slot-content">
        <view>some text</view>
      </view>
    </uv-modal>
  </view>
</template>

<style lang="scss">
.main {
  padding: 16px;
}
</style>
