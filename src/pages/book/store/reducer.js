import { INPUTVALCHANGE, SETBOOKDATA, SETPAGENUM, SEARCHBOOK, DELBOOK } from './actionTypes'
const defaultState = {
  list: [],
  pageNum: 1,
  inputVal: '',
  pageSize: 10,
  total: 22,
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case INPUTVALCHANGE:
      newState.inputVal = action.value;
      break;

    case SETBOOKDATA:
      newState.list = action.data;
      // newState.total = action.data.total;
      break;

    case SEARCHBOOK:
      let arr = [];
      for (var i = 0; i < newState.list.length; i++) {
        if (newState.list[i].bookName.indexOf(action.value) !== -1) {
          arr.push(newState.list[i])
        }
      }
      newState.list = arr
      break;

    case SETPAGENUM:
      newState.pageNum = action.value;
      break;

    case DELBOOK:
      for (var j = 0; j < newState.list.length; j++) {
        if (newState.list[j].id === Number(action.delId)) {
          newState.list.splice(j,1)
          
        }
      }
      break;

    default:
      break;
  }
  return newState;
}
