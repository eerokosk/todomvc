import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  render: function() {
    return (
      <li className={classNames({
        'completed': this.props.todo.completed,
        'hidden': (this.props.filter !== null && this.props.todo.completed !== this.props.filter)
      })}>
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
