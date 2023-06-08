// miniprogram/pages/multi2/index.js

const sliderWidth = 96;
const TAB_TYPE_HOT = 0;
const TAB_TYPE_RECENT = 1;

const fakeData = [{
    appid: 1251659802,
    fileid: '5285890791109941711',
    title: '视频标题1',
  coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109941711/1562237448_1472532171.100_0.jpg',
    width: 720,
    height: 1280,
    commentList: [],
    isLiked: false
  },
  {
    appid: 1251659802,
    fileid: '5285890791109941453',
    title: '视频标题2',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109941453/1562237444_3826796458.100_0.jpg',
    width: 720,
    height: 1280,
    commentList: [],
    isLiked: false
  },
  {
    appid: 1251659802,
    fileid: '5285890791109941180',
    title: '视频标题3',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109941180/1562237441_2423139211.100_0.jpg',
    width: 720,
    height: 1280,
    commentList: [],
    goodsList: []
  },
  {
    appid: 1251659802,
    fileid: '5285890791109940909',
    title: '视频标题4',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109940909/1562237438_4168820116.100_0.jpg',
    width: 720,
    height: 1280,
    commentList: [],
    goodsList: []
  },
  {
    appid: 1251659802,
    fileid: '5285890791109922221',
    title: '视频标题5',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109922221/1562237435_1578341739.100_0.jpg',
    width: 720,
    height: 1280,
    commentList: [],
    goodsList: []
  },
  {
    appid: 1251659802,
    fileid: '5285890791109940382',
    title: '视频标题6',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109940382/1562237429_2182364849.100_0.jpg',
    width: 720,
    height: 1280
  },
  {
    appid: 1251659802,
    fileid: '5285890791109940103',
    title: '视频标题7',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109940103/1562237427_3147107032.100_0.jpg',
    width: 720,
    height: 1280
  },
  {
    appid: 1251659802,
    fileid: '5285890791109939861',
    title: '视频标题8',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109939861/1562237424_1068219948.100_0.jpg',
    width: 720,
    height: 1280
  },
  {
    appid: 1251659802,
    fileid: '5285890791109939655',
    title: '视频标题9',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109939655/1562237418_4024447865.100_0.jpg',
    width: 720,
    height: 1280
  },
  {
    appid: 1251659802,
    fileid: '5285890791109939422',
    title: '视频标题10',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109939422/1562237416_1669816493.100_0.jpg',
    width: 720,
    height: 1280
  },
  {
    appid: 1251659802,
    fileid: '5285890791109939193',
    title: '视频标题11',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109939193/1562237414_2011024909.100_0.jpg',
    width: 720,
    height: 1280
  },
  {
    appid: 1251659802,
    fileid: '5285890791109873783',
    title: '视频标题12',
    coverImage: 'http://1251659802.vod2.myqcloud.com/vodtranscq1251659802/5285890791109873783/1562237345_3890005436.100_0.jpg',
    width: 720,
    height: 1280
  }
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: 720,
    windowHeight: 1280,
    hotList: [],
    recentList: [],
    tabs: ["热门", "最新"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效

    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });

        that.getVideoList();
      }
    });

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

    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效

    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });

        that.getVideoList();
      }
    });
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

  // 打乱数组，模拟数据用
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },


  //tab 点击处理
  tabClick(e) {
    console.log(e)
    let currIndex = e.currentTarget.id
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: currIndex
    });

    this.getVideoList(currIndex)
  },

  getFakeCommentList() {
    let fakeNum = parseInt(Math.random() * 10);
    let arr = [];
    let contPool = ['这个不错！', '笑死我了', '赞一个', '在哪可以找到这东西', '顶', '哈哈哈222333']
    for (let i = 0; i < fakeNum; i++) {
      let tmp = {};
      tmp.userIcon = "../images/user-icon.svg";
      tmp.content = contPool[parseInt(Math.random() * 5)]
      tmp.timeStr = "2分钟前";
      tmp.userName = "腾讯云客户" + parseInt(Math.random() * 10000);
      arr.push(tmp);
    }

    return arr;

  },

  getFakeGoodsList() {
    let fakeNum = parseInt(Math.random() * 10);
    let arr = [];
    for (let i = 0; i < fakeNum; i++) {
      let tmp = {};
      tmp.goodsIcon = "../images/comment-empty.svg";
      tmp.price = '¥' + parseInt(Math.random() * 500);
      tmp.goodsName = "模拟商品" + parseInt(Math.random() * 10000);
      arr.push(tmp);
    }

    return arr;
  },

  //模拟获取视频列表
  getVideoList(type) {

    type = parseInt(type)

    const app = getApp();

    type = type || TAB_TYPE_HOT;
    const ww = this.data.windowWidth;
    const wh = this.data.windowHeight;

    let rw = ww / 3; // imagewidth

    wx.showLoading({
      title: '加载视频列表中',
    });

    setTimeout(() => {
      let res = [];

      for (let i = 0; i < 18; i++) {
        let randomIndex = parseInt(Math.random() * fakeData.length);
        let obj = fakeData[randomIndex];
        //obj.realWidth = rw + 'px';
        //obj.realHeight = (rw / obj.width) * obj.height + 'px';

        //obj.appid = '1251132654';
        //obj.fileid = '5285890787830074116';

        //计算缩略图和缩略图容器的宽高
        let thumbnailWidth = rw;
        let thumbnailHeight = (rw / obj.width) * obj.height;

        let thumbnailContWidth = thumbnailWidth;
        let thumbnailContHeight = thumbnailHeight;
        if (obj.height < obj.width) { //宽视频特殊处理
          let r = obj.width / obj.height;
          thumbnailContHeight = thumbnailWidth * r;
        }

        obj.thumbnailWidth = thumbnailWidth + 'px';
        obj.thumbnailHeight = thumbnailHeight + 'px';
        obj.thumbnailContHeight = thumbnailContHeight + 'px';
        obj.thumbnailContWidth = thumbnailContWidth + 'px';

        //计算详情视频的宽高
        let currVideoWidth = ww;
        let currVideoHeight = wh;
        let currVideoTop = 0;

        if (obj.height < obj.width) {
          let rate = obj.height / obj.width;
          currVideoHeight = ww * rate;
          currVideoWidth = ww;
          currVideoTop = (wh - currVideoHeight) / 2;
        }

        obj.currVideoWidth = currVideoWidth + 'px';
        obj.currVideoHeight = currVideoHeight + 'px';
        obj.currVideoTop = currVideoTop + 'px';

        obj.commentList = this.getFakeCommentList();
        obj.goodsList = this.getFakeGoodsList();

        res.push(obj);
      }

      if (type === TAB_TYPE_HOT) {
        this.setData({
          hotList: res
        });
      } else if (type === TAB_TYPE_RECENT) {
        console.log('set recent')
        this.setData({
          recentList: res
        });
      }


      app.globalData.currVideoList = res;
      wx.hideLoading();
    }, 600)

  }

})