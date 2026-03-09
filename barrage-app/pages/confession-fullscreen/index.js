Page({
  data: {
    bgColor: '#000000',
    textColor: '#ffffff',
    displayText: ''
  },

  onLoad(options) {
    if (options.bgColor) {
      this.setData({ bgColor: decodeURIComponent(options.bgColor) });
    }
    if (options.textColor) {
      this.setData({ textColor: decodeURIComponent(options.textColor) });
    }
    if (options.displayText) {
      this.setData({ displayText: decodeURIComponent(options.displayText) });
    }
  },

  goBack() {
    wx.navigateBack();
  }
});
