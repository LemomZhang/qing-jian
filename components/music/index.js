// components/music/index.js
let aud = wx.getBackgroundAudioManager()

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    music:Array,
    idd:Number,
    isPlay:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

    pauseSrc:'img/pause.png',
    playSrc:'img/play.png',
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(e){
      let idd = e.currentTarget.dataset.id
      if (!this.properties.isPlay[idd]){
        // this.setData({
        //   isPlay:true
        // })
        for(let i=0;i<this.properties.isPlay.length;i++){
          if(i===idd){
            this.properties.isPlay[i] = true
          }else{
            this.properties.isPlay[i] = false
          }
       
        }
        aud.title = this.properties.music[idd].name
        aud.src = this.properties.music[idd].play_url
        console.log(this.properties.isPlay)
      }else{
        // this.setData({
        //   isPlay: false
        // })
        this.properties.isPlay[idd] = false
       aud.pause()
        console.log(this.properties.isPlay)
      }
    },
  }
})
