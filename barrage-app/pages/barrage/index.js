Page({
  data: {
    barrageText: '请输入滚动弹幕文字...',
    inputFocus: true,
    textColor: '#ffffff',
    bgColor: '#000000',
    showTextColorPicker: false,
    showBgColorPicker: false,
    showSpeedPicker: false,
    scrollSpeed: 8,
    colorList: [
      '#FFFFFF', '#FFE135', '#39FF14', '#FF9500', '#FF5E96', '#00CCFF',
      '#C77DFF', '#81F4E1', '#FFDCA8', '#FFB6C1', '#FFFF00', '#00E5FF',
      '#FF0099', '#FF4D4F', '#FFC107', '#2196F3', '#9C27B0', '#00BCD4',
      '#8BC34A', '#FFAB91', '#D81B60', '#1E88E5', '#43A047', '#FDD835',
      '#FF6F00', '#BA68C8', '#64FFDA', '#FF80AB', '#7C4DFF', '#00FFA3',
      '#FF3D71', '#FFB74D', '#69F0AE', '#FF8A80', '#82B1FF', '#EA80FC'
    ],
    bgColorList: [
      '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
      '#FFFF00', '#FF00FF', '#00FFFF', '#FF6600', '#9900FF',
      '#808080', '#C0C0C0', '#800000', '#008000', '#000080'
    ]
  },

  onLoad() {
    this.setData({ inputFocus: true });
  },

  goBack() {
    const pages = getCurrentPages();
    if (pages.length > 1) {
      wx.navigateBack({
        delta: 1,
        fail: () => {
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      });
    } else {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },

  focusInput() {
    this.setData({ inputFocus: true });
  },

  onInput(e) {
    const value = e.detail.value || '请输入滚动弹幕文字...';
    this.setData({ barrageText: value });
  },

  closePickers() {
    this.setData({
      showTextColorPicker: false,
      showBgColorPicker: false,
      showSpeedPicker: false
    });
  },

  showTextColorPicker() {
    this.setData({ 
      showTextColorPicker: !this.data.showTextColorPicker,
      showBgColorPicker: false,
      showSpeedPicker: false
    });
  },

  showBgColorPicker() {
    this.setData({ 
      showBgColorPicker: !this.data.showBgColorPicker,
      showTextColorPicker: false,
      showSpeedPicker: false
    });
  },

  showSpeedPicker() {
    this.setData({ 
      showSpeedPicker: !this.data.showSpeedPicker,
      showTextColorPicker: false,
      showBgColorPicker: false
    });
  },

  selectTextColor(e) {
    this.setData({
      textColor: e.currentTarget.dataset.color,
      showTextColorPicker: false
    });
  },

  selectBgColor(e) {
    this.setData({
      bgColor: e.currentTarget.dataset.color,
      showBgColorPicker: false
    });
  },

  onSpeedChange(e) {
    this.setData({
      scrollSpeed: e.detail.value
    });
  },

  // 全屏预览
  navigateToFullscreen() {
    const { bgColor, textColor, barrageText, scrollSpeed } = this.data;
    wx.navigateTo({
      url: `/pages/barrage-fullscreen/index?bgColor=${encodeURIComponent(bgColor)}&textColor=${encodeURIComponent(textColor)}&barrageText=${encodeURIComponent(barrageText)}&scrollSpeed=${scrollSpeed}`
    });
  }
});
