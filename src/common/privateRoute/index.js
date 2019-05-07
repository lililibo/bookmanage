import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
  render () {
    const { component: Component, path, isLogin } = this.props;
    return (
      <Route
        path = { path }
        render = {() => {
          if (isLogin) {
            return <Component></Component>
          } else {
            return (
              <Redirect
                from={path} to={{
                  pathname: '/login',
                  search: `?redirect=${path}`
                }}
              ></Redirect>
            )
          }
        }}
      ></Route>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    isLogin: state.common.isLogin
  }
}

const mapDispatchToProps = () => {
  return {
    
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(PrivateRoute);
