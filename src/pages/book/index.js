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
      title: '图书编号',
      key: 'bookId',
      dataIndex: 'bookId'
    },{
      title: '图书名',
      key: '图书名',
      dataIndex: 'bookName'
    },{
      title: '作者',
      key: '作者',
      dataIndex: 'author'
    },{
      title: '价格',
      key: '价格',
      dataIndex: 'price'
    },{
      title: '上架时间',
      key: '上架时间',
      dataIndex: 'updatedate'
    },{
      title: '海报',
      key: '海报',
      dataIndex: 'coverurl',
      render: (text, record, index) => {
        return <img src={text} alt="" />
      }
    },{
      title: '操作',
      key: '操作',
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
