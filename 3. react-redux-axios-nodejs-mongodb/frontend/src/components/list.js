import React from 'react';
import ItemComponent from 'src/components/item.js';
import { browserHistory } from 'react-router';

export default React.createClass({
  componentDidMount: function() {
    var self = this;
    browserHistory.listen(function(location) {
      var filter = location.pathname.split('/').filter(function(n){ return n != '' })[0] || 'all';
      self.props.todoActions.getTodos(filter);
    });
  },

  handleToggleAll: function(e) {
    // has all todos been completed or not
    var allCompleted = this.props.todos.filter((todo) =>
      todo.completed === true ).length === this.props.todos.length
        ? true : false;

    // toggle all completed states or set all as completed
    this.props.todos.map((todo, key) => {
      todo.completed = allCompleted ? !todo.completed : true;
      this.props.todoActions.updateTodo(todo);
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
