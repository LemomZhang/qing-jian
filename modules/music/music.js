import {HTTP} from '../../utils/http.js'
class Music extends HTTP{
  getMusic(callback){
    this.getData({
      url:'/music',
      method:'get',
      success:(res)=>{
        callback(res)
      }
    })
  }
}
export default Music