import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      newTodo: ''
    };
  },

  handleChange: function (e) {
    this.setState({newTodo: e.target.value});
  },

  handleKeyDown: function (e) {
    // don't handle if not enter key pressed
    if (e.keyCode !== 13) {
      return;
    }

    // submit new todo
    this.props.handleSubmit(e);

    // reset new todo field
    this.setState({newTodo: ''});
  },

  render: function() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          value={this.state.newTodo}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </header>
    )
  }
});
