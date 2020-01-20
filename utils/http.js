import {base_url} from '../config.js'
class HTTP{
  getData(config){
    wx.request({
      url: base_url + config.url,
      method: config.method,
      success:(res)=>{
        if (res){
          config.success(res.data)
        }else{
          wx.showToast({
            title: '请求失败',
            icon: null,
            duration: 2000
          })
        }
      },
      fail:()=>{
        wx.showToast({
          title: '网络错误',
          icon: null,
          duration: 2000
        })
      }
    })
  }
}
export {HTTP}