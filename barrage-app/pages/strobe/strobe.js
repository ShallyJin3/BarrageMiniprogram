// pages/strobe/strobe.js
Page({
  data: {
    isWhite: true,
    timer: null
  },

  onLoad() {
    this.startStrobe();
  },

  onUnload() {
    this.stopStrobe();
  },

  onHide() {
    this.stopStrobe();
  },

  startStrobe() {
    const that = this;
    this.data.timer = setInterval(() => {
      that.setData({
        isWhite: !that.data.isWhite
      });
    }, 100); // 0.1s 切换
  },

  stopStrobe() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
      this.data.timer = null;
    }
  },

  goBack() {
    this.stopStrobe();
    wx.navigateBack();
  }
});
