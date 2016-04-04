var app = app || {};

(function () {
  'use strict';

  var AppItem = app.AppItem;

  app.AppList = React.createClass({

    componentDidMount: function() {
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

    handleToggleAll: function () {
      // toggle completed to false if all completed, otherwise to true
      var toggleToValue = (this.props.collection.where({completed: true}).length === this.props.collection.length)
        ? false : true;

      // save all models
      this.props.collection.each(function (model) {
        model.save({
          completed: toggleToValue
        });
      });
    },

    render: function () {
      // set Backbone where filter by filter status
      var filter = app.TodoFilter === app.ACTIVE_TODOS
        ? {completed: false}
        : (app.TodoFilter === app.COMPLETED_TODOS ? {completed: true} : {});

      var todos = this.props.collection
        // filter todos
        .where(filter)
        // list filtered todos
        .map(function(model, index) {
          // transfer todo model to component as a property
          return <AppItem key={model.get('_id')} model={model} />
        });

      return (
        <section className="main">
          <input className="toggle-all" id="toggle-all" type="checkbox" onClick={this.handleToggleAll} />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">{todos}</ul>
        </section>
      );
    }
  });
})();
