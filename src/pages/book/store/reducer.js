import { INPUTVALCHANGE, SETBOOKDATA, SETPAGENUM } from './actionTypes'
const defaultState = {
  list: [],
  pageNum: 1,
  inputVal: '',
  pageSize: 1,
  total: 1,
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case INPUTVALCHANGE:
      newState.inputVal = action.value;
      break;
      
    case SETBOOKDATA:
      newState.list = action.data.list;
      newState.total = action.data.total;
      break;

    case SETPAGENUM:
      newState.pageNum = action.value;
      break;

    default:
      break;
  }
  return newState;
}
