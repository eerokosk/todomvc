import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.itemsLeft}</strong> items left
        </span>
        <ul className="filters">
          <li onClick={this.props.handleFilter}><Link to="/" className={this.props.filter === null ? 'selected' : ''}>All</Link></li>
          <li onClick={this.props.handleFilter}><Link to="/active" className={this.props.filter === false ? 'selected' : ''}>Active</Link></li>
          <li onClick={this.props.handleFilter}><Link to="/completed" className={this.props.filter === true ? 'selected' : ''}>Completed</Link></li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
});
