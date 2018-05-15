// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     // motto: 'Hello World',
//     // userInfo: {},
//     // hasUserInfo: false,
//     // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
//     img_index:"../../images/index.jpg"
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })

// var order = ['red', 'yellow', 'blue', 'green', 'red']
// Page({
//   data: {
//     toView: 'red',
//     scrollTop: 100
//   },
//   upper: function (e) {
//     console.log(e)
//   },
//   lower: function (e) {
//     console.log(e)
//   },
//   scroll: function (e) {
//     console.log(e)
//   },
//   tap: function (e) {
//     for (var i = 0; i < order.length; ++i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i + 1]
//         })
//         break
//       }
//     }
//   },
//   tapMove: function (e) {
//     this.setData({
//       scrollTop: this.data.scrollTop + 10
//     })
//   }
// })

var app = getApp()
console.log(app.globalData)
Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '/images/home.jpg'
      }
      //  {
      //   link: '/pages/logs/logs',
      //   url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      // }, {
      //   link: '/pages/test/test',
      //   url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      // }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad test');
  }
}) 