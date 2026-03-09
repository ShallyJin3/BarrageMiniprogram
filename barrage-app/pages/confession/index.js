Page({
  data: {
    displayText: '请输入展示文字...',
    inputFocus: true,
    textColor: '#ffffff',
    bgColor: '#000000',
    showTextColorPicker: false,
    showBgColorPicker: false,
    maxLength: 6,
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

  focusInput() {
    this.setData({ inputFocus: true });
  },

  onInput(e) {
    let value = e.detail.value || '请输入展示文字...';
    if (value.length > 6) {
      value = value.slice(0, 6);
    }
    this.setData({ displayText: value });
  },

  closePickers() {
    this.setData({
      showTextColorPicker: false,
      showBgColorPicker: false
    });
  },

  showTextColorPicker() {
    this.setData({ 
      showTextColorPicker: !this.data.showTextColorPicker,
      showBgColorPicker: false
    });
  },

  showBgColorPicker() {
    this.setData({ 
      showBgColorPicker: !this.data.showBgColorPicker,
      showTextColorPicker: false
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

  navigateToFullscreen() {
    const { bgColor, textColor, displayText } = this.data;
    wx.navigateTo({
      url: `/pages/confession-fullscreen/index?bgColor=${encodeURIComponent(bgColor)}&textColor=${encodeURIComponent(textColor)}&displayText=${encodeURIComponent(displayText)}`
    });
  }
});
