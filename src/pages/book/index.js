import { connect } from 'react-redux'
import React from 'react'
import BookUI from './ui'
import { inputChange, getBookListAction, searchBookAction, pageClickAction } from './store/createActions';
import store from '@/store'
import { Button, Modal } from 'antd'
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
      dataIndex: 'price'
    }, {
      title: '上架时间',
      key: '上架时间',
      dataIndex: 'updatedate'
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

// 查看按钮
class Seenbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: '',
      bookName: '',
      author: '',
      price: '',
      updatedate: ''
    }
  }
  render() {
    return (
      <>
        <Button
          className='see'
          style={{ backgroundColor: '#329900', color: '#fff', marginRight: '2px' }}
          onClick={this.showModal}>
          查看
        </Button>
        <Modal
          title="图书详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          centered={true}
        >
          <p>图书编号:{this.state.id}</p>
          <p>图书名称:{this.state.bookName}</p>
          <p>作者：{this.state.author}</p>
          <p>价格：{this.state.price}</p>
          <p>上架时间：{this.state.updatedate}</p>
        </Modal>
      </>
    )
  }
  showModal = (e) => {
    var e = e.target.parentNode.parentNode.parentNode;
    this.setState({
      visible: true,
      id: e.children[0].innerText,
      bookName: e.children[1].innerText,
      author: e.children[2].innerText,
      price: e.children[3].innerText,
      updatedate: e.children[4].innerText
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookUI);
