import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './common/components/Sider';
import Header from './common/components/Header';
import BookPage from './pages/book';
import PrivateRoute from '@/common/privateRoute'

class App extends Component {
  render() {
    return (
        <Layout>
          <Sider />
            <Layout style={{ marginLeft: 200 }}>
              <Header />
              <Layout.Content style={{ padding: 20 }}>
                  {/* 右侧内容 */}
                  {/* 1. 图书管理 localhost:3000/ */}
                <Switch>
                  <Route path="/book" exact component={BookPage} ></Route>
                </Switch>
              </Layout.Content>
            </Layout>
        </Layout>
    )
  }
}

export default App;
