import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import classNames from 'classnames';

export default React.createClass({
  getInitialState: function () {
    return {
      editing: false,
      text: this.props.todo.text
    };
  },

  componentDidUpdate: function(prevProps) {
    // when entering edit mode
    if (this.state.editing && prevProps.todo.text === this.state.text) {
      // find edit field
      var node = ReactDOM.findDOMNode(this.refs.editField);
      // set focus to edit field
      node.focus();
      // move cursor at the end of the edit field
      node.setSelectionRange(node.value.length, node.value.length);
    }
  },

  handleToggle: function(e) {
    this.props.todoActions.completeTodo(this.props.todo.id);
  },

  handleEdit: function(e) {
    this.setState({editing: true});
  },

  handleDestroy: function(e) {
    this.props.todoActions.deleteTodo(this.props.todo.id);
  },

  handleChange: function (e) {
    this.setState({text: e.target.value});
  },

  handleKeyDown: function (e) {
    // cancel todo on escape key
    if (e.keyCode === config.ESCAPE_KEY) {
      this.setState({
        text: this.props.todo.text,
        editing: false
      });
    }

    // on enter key
    else if (e.keyCode === config.ENTER_KEY) {
      this.setState({
        editing: false
      });
    }
  },

  handleBlur: function (e) {
    this.setState({
      editing: false
    });

    // update if not empty
    if (e.target.value) {
      this.props.todo.text = e.target.value;
      this.props.todoActions.editTodo(this.props.todo.id, this.props.todo.text);
    }

    // delete if empty
    else {
      this.props.todoActions.deleteTodo(this.props.todo.id);
    }
  },

  render: function() {
    return (
      <li className={classNames({
        'editing': this.state.editing,
        'completed': this.props.todo.completed,
        'hidden': this.props.routing.pathparts[0] && (
            (this.props.todo.completed === true && this.props.routing.pathparts[0] !== 'completed') ||
            (this.props.todo.completed === false && this.props.routing.pathparts[0] !== 'active'))
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.handleToggle}
            checked={this.props.todo.completed} />
          <label onDoubleClick={this.handleEdit}>{this.props.todo.text}</label>
          <button className="destroy" onClick={this.handleDestroy} />
        </div>
        <input
          ref="editField"
          className="edit"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleBlur} />
      </li>
    )
  }
});