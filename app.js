App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
   // console.log(options)

    //2.获取用户信息，并且获取到用户信息之后，将用户信息传递给服务器
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

  },


  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalDate:{
    name:'coderwhy',
    age:13
  }
})
