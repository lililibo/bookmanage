import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render () {
    const { handleLogin } = this.props;
    return (
      <button onClick={ handleLogin }>点我登陆</button>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleLogin: () => {
      dispatch({
        type: 'LOGIN'
      })
      let redirect = props.location.search.substr(10);
      props.history.replace(redirect);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
