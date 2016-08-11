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

const mapStateToProps = function(state, ownProps) {
  return {
    filter: state.filterReducer.filter,
    todos: state.todoReducer.todos
  };
};

export default connect(mapStateToProps)(ListContainer);
