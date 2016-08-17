import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import * as Utils from 'src/modules/utils';

export default React.createClass({
  handleCompleted: function(e) {
    this.props.todos.map((todo, key) => {
      if (todo.completed) {
        this.props.todoActions.deleteTodo(todo);
      }
    });
  },

  render: function() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.todos.reduce((count, todo) =>
            !todo.completed ? count + 1 : count, 0)}</strong> items left
        </span>
        <ul className="filters">
          <li><Link to="/" className={classNames({'selected': Utils.filter() === 'all' })}>All</Link></li>
          <li><Link to="/active" className={classNames({'selected': Utils.filter() === 'active'})}>Active</Link></li>
          <li><Link to="/completed" className={classNames({'selected': Utils.filter() === 'completed'})}>Completed</Link></li>
        </ul>
        <button
          onClick={this.handleCompleted}
          className={classNames({
            'clear-completed': true,
            'hidden': this.props.todos.filter((todo) =>
              todo.completed === true ).length === 0
                ? true : false
          })}>
          Clear completed
        </button>
      </footer>
    )
  }
});
