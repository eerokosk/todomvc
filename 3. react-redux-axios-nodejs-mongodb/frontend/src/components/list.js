import React from 'react';
import ItemComponent from 'src/components/item.js';
import { browserHistory } from 'react-router';

export default React.createClass({
  componentDidMount: function() {
    var self = this;
    // get todos on route change
    browserHistory.listen(function() {
      self.props.todoActions.getTodos();
    });
  },

  handleToggleAll: function(e) {
    var self = this;
    // toggle all completed states or set all as completed
    this.props.todos.map((todo, key) => {
      this.props.todoActions.updateTodo(todo, {
        completed: this.props.todos.every(todo => todo.completed) ? !todo.completed : true
      }, function(todo) {
        // get updated todos
        self.props.todoActions.getTodos();
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
          checked={this.props.todos.every(todo => todo.completed)}
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
