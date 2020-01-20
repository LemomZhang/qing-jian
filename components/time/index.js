// components/time/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
 
  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',],
    month:'',
    year:null
  },
  attached() { 
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    this.setData({
      month: this.data.months[month],
      year: year
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
