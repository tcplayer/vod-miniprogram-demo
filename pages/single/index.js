// var plugin = requirePlugin("myPlugin")
// console.log(plugin)
// Page({
//   onLoad: function() {
//     plugin.getData()
//   }
// })
const plugin = requirePlugin("myPlugin")
Page({
  data: {
    appid: 1251364008,
    vid: 5285890789104441935,
    title: '测试标题1',
    playerid: 'test1',
    width: '',
    height: '',
    poster: 'http://1251364008.vod2.myqcloud.com/d7bdaf08vodtranscq1251364008/118295915285890789104441935/1557886449_3726473369.100_0.jpg',
    muted: false,
    loop: false,
    ctx: null,
    seekVal: 21
  },

  onReady: function() {
    let ctx = plugin.getContext(this.data.playerid);
    if (ctx) {
      this.setData({
        ctx: ctx
      })
    }

  },

  genIds: function(e) {
    console.log(e)

  },


  loopChange: function(e) {
    this.data.ctx.setLoop(e.detail.value)
  },
  mutedChange: function(e) {
    this.data.ctx.setMuted(e.detail.value)
  },

  playChange(e){

    let playing = e.detail.value;

    if(playing){
      this.data.ctx.play();
    }else{
      this.data.ctx.pause();
    }

  },

  goSeek(e) {
    //console.log('seek,', e.detail.value)
    this.data.ctx.seek(this.data.seekVal);
  },

  bindplay() {
    console.log('bindplay in page...')
  },

  bindpause() {
    console.log('pause...')
  },

  bindended() {
    console.log('ended')
  },

  back(){
    wx.redirectTo({
      url: '../index'
    });
  }


});