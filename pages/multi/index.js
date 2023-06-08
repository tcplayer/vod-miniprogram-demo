// miniprogram/pages/multi/index.js
const plugin = requirePlugin("myPlugin")
Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentPlayIndex: 0,

    list: [{
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1ff172225285890789444439497/1558670179_363575002.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1ff172225285890789444439497/uU7azKVFumoA.mp4',
        playerid: 'test0',
        height: '240px',
        active: false,

      },
      {
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1ff0fa835285890789444438958/1558670171_2162645964.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1ff0fa835285890789444438958/x7wdXILIzWUA.mp4',
        playerid: 'test1',
        height: '240px',
        active: false
      },
      {
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1ff0e59e5285890789444438485/1558670160_3713836399.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1ff0e59e5285890789444438485/QvcA9kzOQIMA.mp4',
        playerid: 'test2',
        height: '240px',
        active: false,
        height: '240px',
      },
      {
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1ff0d3f65285890789444438036/1558670148_516931175.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1ff0d3f65285890789444438036/4SRjK10bpKYA.mp4',
        playerid: 'test3',
        active: false,
        height: '240px',
      },
      {
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1de31ba35285890789444376993/1558670138_1273306190.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1de31ba35285890789444376993/YdOWrvxapKEA.mp4',
        playerid: 'test4',
        active: false,
        height: '240px',
      },
      {
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1de305db5285890789444376454/1558670123_984164838.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1de305db5285890789444376454/8wybHnqyNOwA.mp4',
        playerid: 'test5',
        active: false,
        height: '240px',
      },
      {
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1fbab15d5285890789444408982/1558670112_3508139748.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1fbab15d5285890789444408982/K9aUYbBTNiMA.mp4',
        playerid: 'test6',
        active: false,
        height: '240px',
      },
      {
        src: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/1de26cfc5285890789444375177/1558670095_1799197514.100_0.jpg',
        vsrc: 'http://1251364008.vod2.myqcloud.com/00d3c160vodcq1251364008/1de26cfc5285890789444375177/4qMpfXWaHtcA.mp4',
        playerid: 'test7',
        active: false,
        height: '240px',
      },

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },



  clickCover(e) {

    let index = e.currentTarget.dataset.index;

    let cpi = this.data.currentPlayIndex;

    let key = 'list[' + index + '].active';
    let laskKey = 'list[' + cpi + '].active';

    if (cpi !== index) {
      this.setData({
        [key]: true,
        [laskKey]: false,
        currentPlayIndex: index
      }, function() {
        console.log('index=' + index)
        //let ctx = plugin.getContext('test' + index);
      });
    } else {
      this.setData({
        [key]: true
      }, function() {
        //let ctx = plugin.getContext('test' + index);
      });
    }

    //console.log(this.data.list)
  }

})