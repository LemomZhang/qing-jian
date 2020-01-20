// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike:{
      type:Boolean,
    },
    num:{
      type:Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    blackSrc:'img/black.png',
    fillSrc:'img/fill.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toChange(e){
      let num = this.properties.num
      let isLike = this.properties.isLike
      num = isLike?num-1:num+1
      this.setData({
        num: num,
        isLike:!isLike
      })
    }
  }
})
