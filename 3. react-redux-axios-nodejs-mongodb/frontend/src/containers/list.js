import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from 'src/api/todo';
import ListComponent from 'src/components/list.jsx';

const ListContainer = React.createClass({

  componentWillMount: function() {
    getTodos();
  },

  render: function() {
    return (
      <ListComponent {...this.props} />
    )
  }
});

const stateToProps = function(state) {
  return {
    todos: state.todoReducer.todos
  };
};

export default connect(stateToProps)(ListContainer);
