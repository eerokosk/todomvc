import React from 'react';
import ItemComponent from 'src/components/item.js';
import { browserHistory } from 'react-router';

export default React.createClass({
  _getFilter: function() {
    return location.pathname.split('/').filter(function(n){ return n != '' })[0] || 'all';
  },

  componentDidMount: function() {
    var self = this;
    browserHistory.listen(function() {
      self.props.todoActions.getTodos(self._getFilter());
    });
  },

  componentWillUpdate: function(nextProps, nextState) {
    if (this.props.todos.length > 0 && this.props.todos.length === nextProps.todos.length &&
      this.props.todos.filter((todo) => todo.completed === true).length !==
      nextProps.todos.filter((todo) => todo.completed === true).length) {
      this.props.todoActions.getTodos(this._getFilter());
    }
  },

  handleToggleAll: function(e) {
    // has all todos been completed or not
    var allCompleted = this.props.todos.every(todo => todo.completed);

    // toggle all completed states or set all as completed
    this.props.todos.map((todo, key) => {
      this.props.todoActions.updateTodo(todo, {
        completed: allCompleted ? !todo.completed : true
      });
    });
  },

  render: function() {
    var self = this;
    return (
      <section className="main">
        <input
          className="toggle-all"
          id="toggle-all"
          type="checkbox"
          checked={this.props.todos.filter((todo) =>
            todo.completed === true ).length === this.props.todos.length}
          onChange={this.handleToggleAll}
          />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((todo, key) => {
            return (
              <ItemComponent key={todo._id} todo={todo} {...self.props} />
            );
          })}
        </ul>
      </section>
    )
  }
});
