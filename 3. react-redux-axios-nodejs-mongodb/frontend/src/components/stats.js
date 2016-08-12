import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default React.createClass({
  handleFilter: function (e) {
    this.props.filterActions.setFilter();
  },

  handleCompleted: function(e) {
    this.props.todos.map((todo, key) => {
      if (todo.completed) {
        this.props.todoActions.deleteTodo(todo.id);
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
          <li onClick={this.handleFilter}>
            <Link to="/" className={classNames({'selected': this.props.filter.selected === null})}>All</Link>
          </li>
          <li onClick={this.handleFilter}>
            <Link to="/active" className={classNames({'selected': this.props.filter.selected === false})}>Active</Link>
          </li>
          <li onClick={this.handleFilter}>
            <Link to="/completed" className={classNames({'selected': this.props.filter.selected === true})}>Completed</Link>
          </li>
        </ul>
        <button onClick={this.handleCompleted} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
});
