import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import classNames from 'classnames';

export default React.createClass({
  getInitialState: function () {
    return {
      editedTodo: this.props.todo.title,
      editing: false
    };
  },

  componentDidUpdate: function(prevProps) {
    // when entering edit mode
    if (this.state.editing && prevProps.todo.title === this.state.editedTodo) {
      // find edit field
      var node = ReactDOM.findDOMNode(this.refs.editField);
      // set focus to edit field
      node.focus();
      // move cursor at the end of the edit field
      node.setSelectionRange(node.value.length, node.value.length);
    }
  },

  handleEdit: function(e) {
    this.setState({editing: true});
  },

  handleChange: function (e) {
    this.setState({editedTodo: e.target.value});
  },

  handleKeyDown: function (e) {
    // cancel todo on escape key
    if (e.keyCode === config.ESCAPE_KEY) {
      this.setState({
        editedTodo: this.props.todo.title,
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

    // submit edited todo
    this.props.handleSubmit(e);
  },

  render: function() {
    return (
      <li className={classNames({
        'editing': this.state.editing,
        'completed': this.props.todo.completed,
        'hidden': (this.props.filter !== null && this.props.todo.completed !== this.props.filter)
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.props.handleToggle}
            checked={this.props.todo.completed} />
          <label onDoubleClick={this.handleEdit}>{this.props.todo.title}</label>
          <button className="destroy" onClick={this.props.handleDestroy} />
        </div>
        <input
          ref="editField"
          className="edit"
          value={this.state.editedTodo}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleBlur} />
      </li>
    )
  }
});
