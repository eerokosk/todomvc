import React from 'react';
import ItemContainer from 'src/containers/item.js';

export default React.createClass({
  render: function() {
    return (
      <section className="main">
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((todo, key) => {
            return (
              <ItemContainer key={todo._id} todo={todo} />
            );
          })}
        </ul>
      </section>
    )
  }
});
