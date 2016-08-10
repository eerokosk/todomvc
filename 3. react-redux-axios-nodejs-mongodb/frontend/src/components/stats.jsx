import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong></strong> items left
        </span>
        <ul className="filters">
          <li><a href="/">All</a></li>
          <li><a href="/active">Active</a></li>
          <li><a href="/completed">Completed</a></li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
});
