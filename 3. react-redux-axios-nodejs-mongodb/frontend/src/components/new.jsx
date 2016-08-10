import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          value={this.props.newTodo}
          onKeyDown={this.props.handleNew}
          onChange={this.props.handleChange} />
      </header>
    )
  }
});
