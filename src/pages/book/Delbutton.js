import React from 'react'
import { Button, Modal } from 'antd'
import store from '@/store'
import { delBookAction } from './store/createActions';

// 删除按钮
const confirm = Modal.confirm;
class Delbutton extends React.Component {
  render() {
    return (
      <>
        <Button
          className='del'
          style={{ backgroundColor: '#b32222', color: '#fff' }}
          onClick={this.showConfirm}>
          删除
        </Button>
      </>
    )
  }
  showConfirm(e) {
    var el = e.target.parentNode.parentNode.parentNode;
    var delId = el.children[0].innerText;
    confirm({
      title: '确认删除?',
      content: '是否要删除当前图书',
      onOk() {
        store.dispatch(delBookAction(delId))
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
}
export default Delbutton