import { connect } from 'react-redux'
import React from 'react'
import BookUI from './ui'
import { inputChange, getBookListAction, searchBookAction, pageClickAction } from './store/createActions';
import store from '@/store'
import { Button, Modal } from 'antd'


const mapStateToProps = (state) => {
  return {
    inputVal: state.book.inputVal,
    list: state.book.list,
    columns: [
      {
        title: '图书编号',
        key: 'id',
        dataIndex: 'id'
      }, {
        title: '图书名',
        key: 'bookName',
        dataIndex: 'bookName'
      }, {
        title: '作者',
        key: 'author',
        dataIndex: 'author'
      }, {
        title: '价格',
        key: 'price',
        dataIndex: 'price'
      }, {
        title: '上架时间',
        key: 'updatedate',
        dataIndex: 'updatedate'
      }, {
        title: '海报',
        key: 'coverurl',
        dataIndex: 'coverurl',
        render: (text, record, index) => {
          return <img src={text} alt="" />
        }
      }, {
        title: '操作',
        key: '操作',
        align: 'center',
        render: () => {
          return (
            <div>
              <Seenbutton></Seenbutton>
              <Edit></Edit>
              {/* <Editbutton></Editbutton> */}
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

// 查看详情组件
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
    console.log(e.target.parentNode.parentNode.parentNode)
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

//编辑图书组件
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      bookName: '',
      author: '',
      price: '',
      updatedate: '',
      inputVal1: '',
      inputVal2: '',
      inputVal3: '',
      inputVal4: ''
    }
  }
  render() {
    const { visible, loading, bookName, author, price, updatedate, inputVal1, inputVal2, inputVal3, inputVal4 } = this.state;
    return (
      <>
        <Button
          style={{ backgroundColor: '#ffa500', color: '#fff', marginRight: '2px' }}
          onClick={this.showModal}>
          编辑
      </Button>
        <Modal
          title="编辑图书"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={true}
          footer={[
            <Button key="back" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              确定修改
            </Button>,
          ]}
        >
          图书名称 : <input value={inputVal1} style={{ marginBottom: '5px'}} placeholder={bookName}></input><br />
          作者 : <input value={inputVal2} style={{ marginBottom: '5px'}} placeholder={author}></input><br />
          价格 : <input value={inputVal3} style={{ marginBottom: '5px'}} placeholder={price}></input><br />
          上架时间 : <input value={inputVal4} placeholder={updatedate}></input><br />
        </Modal>
      </>
    )
  }
  showModal = (e) => {
    // console.log(e.target.parentNode.parentNode.parentNode)
    var el = e.target.parentNode.parentNode.parentNode;
    this.setState({
      visible: true,
      bookName: el.children[1].innerText,
      author: el.children[2].innerText,
      price: el.children[3].innerText,
      updatedate: el.children[4].innerText
    });
  }
  handleOk = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({
        visible: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookUI);
