import React from 'react';
import store from './../store';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from 'src/api/todo';
import ItemComponent from 'src/components/item.jsx';

const mapStateToProps = function(state, ownProps) {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleToggle: (e) => {
      ownProps.todo.completed = !ownProps.todo.completed;
      updateTodo(ownProps.todo);
    },
    handleDestroy: (e) => {
      deleteTodo(ownProps.todo);
    },
    handleSubmit: (e) => {
      // update if not empty
      if (e.target.value) {
        ownProps.todo.title = e.target.value;
        updateTodo(ownProps.todo);
      }

      // delete if empty
      else {
        deleteTodo(ownProps.todo);
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);
