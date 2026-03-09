Page({
  data: {
    bgColor: '#000000',
    textColor: '#ffffff',
    barrageText: '',
    scrollSpeed: 5
  },

  onLoad(options) {
    if (options.bgColor) {
      this.setData({ bgColor: decodeURIComponent(options.bgColor) });
    }
    if (options.textColor) {
      this.setData({ textColor: decodeURIComponent(options.textColor) });
    }
    if (options.barrageText) {
      this.setData({ barrageText: decodeURIComponent(options.barrageText) });
    }
    if (options.scrollSpeed) {
      this.setData({ scrollSpeed: parseInt(options.scrollSpeed) });
    }
  },

  goBack() {
    wx.navigateBack();
  }
});
