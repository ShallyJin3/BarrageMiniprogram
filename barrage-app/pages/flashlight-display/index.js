Page({
  data: {
    colors: [],
    currentIndex: 0,
    currentColor: '#ffffff'
  },

  onLoad(options) {
    if (options.colors) {
      const colors = options.colors.split(',').map(c => '#' + c);
      this.setData({
        colors: colors,
        currentColor: colors[0] || '#ffffff'
      });
      if (options.title) {
        wx.setNavigationBarTitle({ title: decodeURIComponent(options.title) });
      }
      this.startFlashing();
    }
  },

  startFlashing() {
    this.timer = setInterval(() => {
      let nextIndex = (this.data.currentIndex + 1) % this.data.colors.length;
      this.setData({
        currentIndex: nextIndex,
        currentColor: this.data.colors[nextIndex]
      });
    }, 200);
  },

  goBack() {
    clearInterval(this.timer);
    wx.navigateBack();
  },

  onUnload() {
    clearInterval(this.timer);
  }
});
