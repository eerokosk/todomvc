import React from 'react';
import * as KeyCodes from '../constants/KeyCodes';

export default React.createClass({
  getInitialState: function () {
    return {
      text: ''
    };
  },

  handleChange: function (e) {
    this.setState({text: e.target.value});
  },

  handleKeyDown: function (e) {
    // don't handle if not enter key pressed
    if (e.keyCode !== KeyCodes.ENTER_KEY) {
      return;
    }

    this.props.todoActions.addTodo(e.target.value);

    // reset new todo field
    this.setState({text: ''});
  },

  render: function() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          value={this.state.text}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </header>
    )
  }
});
