Page({
  data: {},

  goToBarrage() {
    wx.navigateTo({
      url: '/pages/barrage/index'
    });
  },

  goToStrobe() {
    wx.navigateTo({
      url: '/pages/strobe/strobe'
    });
  },

  goToConfession() {
    wx.navigateTo({
      url: '/pages/confession/index'
    });
  },

  goToFlashlight() {
    wx.navigateTo({
      url: '/pages/flashlight/index'
    });
  }
});
