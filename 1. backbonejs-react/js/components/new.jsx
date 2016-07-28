var app = app || {};

(function () {
  'use strict';

  var Todo = app.Todo;

  app.AppNew = React.createClass({

    getInitialState: function () {
      return {
        newTodo: ''
      };
    },

    handleNew: function (e) {
      // don't handle if not enter key pressed
      if (e.keyCode !== app.ENTER_KEY) {
        return;
      }

      // create new todo model
      var model = new Todo({
        title: this.state.newTodo.trim(),
        order: this.props.collection.nextOrder(),
        completed: false
      });

      if (model.isValid()) {
        // add new todo to todos collection
        this.props.collection.create(model);
        // reset new todo
        this.setState({newTodo: ''});
      }
    },

    handleChange: function (e) {
      this.setState({newTodo: e.target.value});
    },

    render: function () {
      return (
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            autoFocus={true}
            onKeyDown={this.handleNew}
            onChange={this.handleChange} />
        </header>
      );
    }
  });
})();