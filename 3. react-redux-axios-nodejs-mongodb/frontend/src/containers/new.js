import React from 'react';
import store from 'src/store';
import { connect } from 'react-redux';
import { addTodo } from 'src/api/todo';
import NewComponent from 'src/components/new.jsx';

const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleSubmit: (e) => {
      addTodo(e.target.value);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);
