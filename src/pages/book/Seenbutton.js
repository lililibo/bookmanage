import React from 'react'
import { Button, Modal } from 'antd'
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
    var el = e.target.parentNode.parentNode.parentNode;
    this.setState({
      visible: true,
      id: el.children[0].innerText,
      bookName: el.children[1].innerText,
      author: el.children[2].innerText,
      price: el.children[3].innerText,
      updatedate: el.children[4].innerText
    });
  }
  handleOk = () => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
}
export default Seenbutton