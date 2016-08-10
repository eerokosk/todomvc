import React from 'react';
import store from 'src/store';
import { connect } from 'react-redux';
// import { getTodos } from 'src/api/todo';
import { addTodo } from 'src/api/todo';
import NewComponent from 'src/components/new.jsx';

const mapStateToProps = function(state, ownProps) {
  return {
    newTodo: state.todoReducer.newTodo
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleNew: (e) => {
      // don't handle if not enter key pressed
      if (e.keyCode !== 13) {
        return;
      }

      addTodo(e.target.value);
    },
    handleChange: (e) => {
      store.dispatch({
        type: 'SUBMIT_TODO',
        newTodo: e.target.value
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);
