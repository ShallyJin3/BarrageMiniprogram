Page({
  data: {
    tabs: ['全部', '应援', '接人', '节日', '表白'],
    currentTab: 0
  },

  switchTab(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
    });
  }
});
