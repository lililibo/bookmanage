import { connect } from 'react-redux'
import React from 'react'
import BookUI from './ui'
import { inputChange, getBookListAction, searchBookAction, pageClickAction } from './store/createActions';
import store from '@/store'
import Seenbutton from './Seenbutton'
import Delbutton from './Delbutton'
import { Button, Modal } from 'antd'


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
      align: 'center',
      render: () => {
        return (
          <div>
            <Seenbutton></Seenbutton>
            <Edit></Edit>
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
