var app = app || {};

(function () {
  'use strict';

  app.AppStats = React.createClass({

    componentWillMount: function() {
      var self = this;

      // force component update on Backbone collection state change
      this.props.collection.bind('change add remove reset', function() {
        self.forceUpdate();
      });

      // force component update on Backbone route change
      app.TodoRouter.on("route", function(route, params) {
        self.forceUpdate();
      });
    },

    handleClearCompleted: function () {
      // destroy all completed todos
      _.invoke(this.props.collection.completed(), 'destroy');
    },

    render: function () {
      var footerClassName = classNames({
        'footer': 1,
        'hidden': !this.props.collection.length
      });

      var clearClassName = classNames({
        'clear-completed': 1,
        'hidden': !this.props.collection.completed().length
      });

      return (
        <footer className={footerClassName}>
          <span className="todo-count">
            <strong>{this.props.collection.remaining().length}</strong> items left
          </span>
          <ul className="filters">
            <li><a href="#/" className={app.TodoFilter === '' ? 'selected' : null}>All</a></li>
            <li><a href="#/active" className={app.TodoFilter === 'active' ? 'selected' : null}>Active</a></li>
            <li><a href="#/completed" className={app.TodoFilter === 'completed' ? 'selected' : null}>Completed</a></li>
          </ul>
          <button className={clearClassName} onClick={this.handleClearCompleted}>Clear completed</button>
        </footer>
      );
    }
  });
})();