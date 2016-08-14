import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default React.createClass({
  handleCompleted: function(e) {
    this.props.todos.map((todo, key) => {
      if (todo.completed) {
        this.props.todoActions.deleteTodo(todo);
      }
    });
  },

  render: function() {
    var filter = location.pathname.split('/').filter(function(n){ return n != '' })[0] || 'all';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.todos.reduce((count, todo) =>
            !todo.completed ? count + 1 : count, 0)}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <Link to="/" className={classNames({'selected': filter === 'all' })}>All</Link>
          </li>
          <li>
            <Link to="/active" className={classNames({'selected': filter === 'active'})}>Active</Link>
          </li>
          <li>
            <Link to="/completed" className={classNames({'selected': filter === 'completed'})}>Completed</Link>
          </li>
        </ul>
        <button onClick={this.handleCompleted} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
});
