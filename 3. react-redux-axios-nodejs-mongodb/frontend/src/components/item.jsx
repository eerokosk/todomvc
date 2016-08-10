import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <li className={this.props.todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.props.handleToggle}
            checked={this.props.todo.completed}
            />
          <label>{this.props.todo.title}</label>
          <button className="destroy" onClick={this.props.handleDestroy} />
        </div>
        <input
          ref="editField"
          className="edit" />
      </li>
    )
  }
});
