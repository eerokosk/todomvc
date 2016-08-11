import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.itemsLeft}</strong> items left
        </span>
        <ul className="filters">
          <li onClick={this.props.handleFilter}>
            <Link to="/" className={classNames({'selected': this.props.filter === null})}>All</Link>
          </li>
          <li onClick={this.props.handleFilter}>
            <Link to="/active" className={classNames({'selected': this.props.filter === false})}>Active</Link>
          </li>
          <li onClick={this.props.handleFilter}>
            <Link to="/completed" className={classNames({'selected': this.props.filter === true})}>Completed</Link>
          </li>
        </ul>
        <button onClick={this.props.handleCompleted} className="clear-completed">Clear completed</button>
      </footer>
    )
  }
});
