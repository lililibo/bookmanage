import { connect } from 'react-redux'
import React from 'react'
import BookUI from './ui'
import { inputChange, getBookListAction, searchBookAction, pageClickAction } from './store/createActions';
import store from '@/store'


const mapStateToProps = (state) => {
  return {
    inputVal: state.book.inputVal,
    list: state.book.list,
    columns: [{
      title: 'bookId',
      key: 'bookId',
      dataIndex: 'bookId'
    },{
      title: 'bookName',
      key: '图书名',
      dataIndex: 'bookName'
    },{
      title: 'author',
      key: '作者',
      dataIndex: 'author'
    },{
      title: 'coverurl',
      key: '海报',
      dataIndex: 'coverurl',
      render: (text, record, index) => {
        return <img src={text} alt="" />
      }
    }],
    pagination: {
      total: state.book.total,
      pageSize: state.book.pageSize,
      onChange: (page, pageSize) => {
        store.dispatch(pageClickAction(page))
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      let value =e.target.value;
      dispatch(inputChange(value));
    },
    searchBtnClick: () => {
      dispatch(searchBookAction());
    },
    getBookList: () => {
      dispatch(getBookListAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookUI);
