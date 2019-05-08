import { INPUTVALCHANGE, SETBOOKDATA, SETPAGENUM, SEARCHBOOK} from './actionTypes';
import http from '@/utils/http';

/**
 * 创建 inputval 修改的动作
 * @param {String} value 输入的内容
 */
export const inputChange = (value) => {
  return {
    type: INPUTVALCHANGE,
    value
  }
}
/**
 * 创建 获取图书 的动作
 */
export const getBookListAction = () => {
  return (dispatch) => {
   
    // let { inputVal, pageNum, pageSize} = getState().book;
    // http.get('./api/book', {
    //   params: {
    //     bookName: inputVal,
    //     pageNum,
    //     pageSize
    //   }
    // })
    //   .then(res => {
    //     if (res.code === 0){
    //       dispatch({
    //         type: SETBOOKDATA,
    //         data: res.data
    //       })
    //     }
    //   })
    http.get('/json/book.json', {}).then(res => {
      dispatch({
                type: SETBOOKDATA,
                data: res
              })
    })
  }
}
/**
 * 创建 搜索的动作
 */
export const searchBookAction = () => {
  return (dispatch, getState) => {
    let { inputVal} = getState().book;
    if(inputVal){
      dispatch({
        type: SEARCHBOOK,
        value: inputVal
      })
    }else{
      dispatch(getBookListAction());
    }
    
    
  }
}
/**
 * 创建 分页点击的动作
 * @param {Number} page 当前点击的页码
 */
export const pageClickAction = (page) => {
  return (dispatch) => {
    dispatch({
      type: SETPAGENUM,
      value: page
    })
    dispatch(getBookListAction());
  }
}
