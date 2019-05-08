import { connect } from 'react-redux'
import React from 'react'
import BookUI from './ui'
import { inputChange, getBookListAction, searchBookAction, pageClickAction } from './store/createActions';
import store from '@/store'
import Seenbutton from './Seenbutton'
import Delbutton from './Delbutton'


const mapStateToProps = (state) => {
  return {
    inputVal: state.book.inputVal,
    list: state.book.list,
    columns: [{
      title: '图书编号',
      key: '图书编号',
      dataIndex: 'id'
    }, {
      title: '图书名',
      key: '图书名',
      dataIndex: 'bookName'
    }, {
      title: '作者',
      key: '作者',
      dataIndex: 'author'
    }, {
      title: '价格',
      key: '价格',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price
    }, {
      title: '上架时间',
      key: '上架时间',
      dataIndex: 'updatedate',
      filters: [{
        text: '2019-05',
        value: '2019-05',
      }, {
        text: '2019-04',
        value: '2019-04',
      },{
        text: '2019-03',
        value: '2019-03',
      }],
      filterMultiple: false,
      onFilter: (value, record) => record.updatedate.substr(6,1)===value.substr(6,1)
    }, {
      title: '海报',
      key: '海报',
      dataIndex: 'coverurl',
      render: (text, record, index) => {
        return <img src={text} alt="" />
      }
    }, {
      title: '操作',
      key: '操作',
      render: () => {
        return (
          <div>
            <Seenbutton></Seenbutton>
            {/* <Editbutton></Editbutton> */}
            <Delbutton></Delbutton>
          </div>
        )
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
      let value = e.target.value;
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
