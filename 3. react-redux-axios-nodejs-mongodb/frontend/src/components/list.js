import React from 'react';
import ItemComponent from 'src/components/item.js';

export default React.createClass({
  render: function() {
    var self = this;
    return (
      <section className="main">
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((todo, key) => {
            return (
              <ItemComponent key={todo.id} todo={todo} {...self.props} />
            );
          })}
        </ul>
      </section>
    )
  }
});