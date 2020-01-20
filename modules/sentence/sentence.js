import {HTTP} from '../../utils/http.js'
class Sentence extends HTTP{
  getSentences(callback){
    this.getData({
      url:'/sentence',
      method:'get',
      success:(res)=>{
        callback(res)
      }
    })
  }
}
export default Sentence