import React, { Children, Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>loading..</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }
  function mapStateToProps({ auth }) {
    return {
      auth,
    };
  }
  return connect(mapStateToProps)(RequireAuth);
};
