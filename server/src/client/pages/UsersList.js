import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }
  render() {
    return (
      <div>
        Users List
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
};
