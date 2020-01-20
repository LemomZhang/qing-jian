// components/music/index.js
let aud = wx.getBackgroundAudioManager()

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    music:Array,
    idd:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'img/pause.png',
    playSrc:'img/play.png',
    isPlay:false,
    title:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(e){
      if(!this.data.isPlay){
        this.setData({
          isPlay:true
        })
        aud.title = this.properties.music[this.properties.idd].name
        aud.src = this.properties.music[this.properties.idd].play_url
      }else{
        this.setData({
          isPlay: false
        })
        aud.pause()
      }
    }
  }
})
