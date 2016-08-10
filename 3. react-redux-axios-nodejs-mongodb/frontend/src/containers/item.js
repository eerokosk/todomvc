import React from 'react';
import store from './../store';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from 'src/api/todo';
import ItemComponent from 'src/components/item.jsx';

const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleToggle: (e) => {
      toggleTodo(ownProps.todo);
    },
    handleDestroy: (e) => {
      deleteTodo(ownProps.todo);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);
