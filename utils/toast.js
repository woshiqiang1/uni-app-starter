class Toast {
  message(text) {
    uni.showToast({
      icon: 'none',
      title: text
    })
  }

  // text 长度 <= 7
  success(text) {
    uni.showToast({
      icon: 'success',
      title: text
    })
  }

  // text 长度 <= 7
  error(text) {
    uni.showToast({
      icon: 'error',
      title: text
    })
  }

  showLoading(text='加载中') {
    uni.showLoading({
      title: text
    })
  }

  hideLoading() {
    uni.hideLoading()
  }

}

export const toast = new Toast()
