import {HTTP} from '../../utils/http.js'
class Movie extends HTTP{
  getMovies(callback){
    this.getData({
      url:'/movie',
      method:'get',
      success:(res)=>{
        callback(res)
      }
    })
  }
}
export {Movie}