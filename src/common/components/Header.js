import React, { Component } from 'react';
import { Layout } from 'antd';
class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      year:new Date().getFullYear(),
      month:new Date().getMonth()+1,
      data:new Date().getDate()
    }
  }
  render() {
    return (
      <Layout.Header style={header_style}>
        <div>
          <div className="header_top" style={header_top_style}>
            <span style={{ marginRight: 40 }}>欢迎</span><span>退出</span>
          </div>
          <div className="header_bottom" style={header_bottom_style}>
            <div className="left title" style={{fontSize:'18px'}}>图书管理系统</div>
            <div className="right">
              <span className="data">{`${this.state.year}-${this.state.month}-${this.state.data}`}</span>&nbsp;&nbsp;
              <span className="weather">晴转多云</span>
            </div>
          </div>
        </div>
      </Layout.Header>
    )
  }
}
const header_style = {
  boxSizing: 'border-box',
  height: '100px',
  background: '#fff',
};
const header_top_style = {
  height: '60px',
  lineHeight: '60px',
  padding: '0 20px',
  textAlign: 'right',
};
const header_bottom_style = {
  height: '40px',
  lineHeight: '40px',
  padding: ' 0 20px',
  borderTop: '1px solid #f9c700',
  display: 'flex',
  justifyContent: 'space-between'
}

export default Header;
