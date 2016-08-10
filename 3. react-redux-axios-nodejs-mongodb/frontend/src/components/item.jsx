import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox" />
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
