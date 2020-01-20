// components/toggle/index.js
import {
  commom
} from "../my-behavior.js"
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [commom],
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: "img/left.png",
    rightSrc: "img/right.png",
    leftNone: "img/leftnone.png",
    rightNone: "img/rightnone.png",
    id: 0,
    isMovie: true,
    isSentence: true,
    isMusic:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previous(e) {
      if (this.data.id != 0) {
        this.setData({
          id: this.data.id - 1
        })
        this.triggerEvent('change', {
          id: this.data.id
        }, {
          bubbles: true,
          composed: true
        })
      }

    },
    next(e) {
      if (this.properties.movies) {
        if (this.data.id < this.properties.movies.length - 1) {
          this.setData({
            id: this.data.id + 1
          })
          this.triggerEvent('change', {
            id: this.data.id
          }, {
            bubbles: true,
            composed: true
          })
        }
      }

      if (this.properties.sentence) {
        if (this.data.id < this.properties.sentence.length - 1) {
          this.setData({
            id: this.data.id + 1
          })
          this.triggerEvent('change', {
            id: this.data.id
          }, {
            bubbles: true,
            composed: true
          })
        }
      }
      if (this.properties.music) {
        if (this.data.id < this.properties.music.length - 1) {
          this.setData({
            id: this.data.id + 1
          })
          this.triggerEvent('change', {
            id: this.data.id
          }, {
              bubbles: true,
              composed: true
            })
        }
      }
    }
  }
})