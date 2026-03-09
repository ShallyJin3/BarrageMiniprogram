Page({
  data: {},

  goToStyle1() {
    const colors = 'FF0000,FFFF00,0000FF';
    wx.navigateTo({
      url: `/pages/flashlight-display/index?colors=${colors}&title=风格一`
    });
  },

  goToStyle2() {
    const colors = 'FF0080,000000,FFFF00';
    wx.navigateTo({
      url: `/pages/flashlight-display/index?colors=${colors}&title=风格二`
    });
  },

  goToStyle3() {
    const colors = '8b0000,009900,000099';
    wx.navigateTo({
      url: `/pages/flashlight-display/index?colors=${colors}&title=风格三`
    });
  }
});
