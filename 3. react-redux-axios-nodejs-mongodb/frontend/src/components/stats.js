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
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.todos.reduce((count, todo) =>
            !todo.completed ? count + 1 : count, 0)}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <Link to="/" className={classNames({'selected': (!this.props.routing.pathparts[0]) })}>All</Link>
          </li>
          <li>
            <Link to="/active" className={classNames({'selected': (this.props.routing.pathparts[0] === 'active')})}>Active</Link>
          </li>
          <li>
            <Link to="/completed" className={classNames({'selected': (this.props.routing.pathparts[0] === 'completed')})}>Completed</Link>
          </li>
        </ul>
        <button onClick={this.handleCompleted} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
});
