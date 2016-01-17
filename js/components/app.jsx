var app = app || {};

(function () {
  'use strict';

  app.ALL_TODOS = 'all';
  app.ACTIVE_TODOS = 'active';
  app.COMPLETED_TODOS = 'completed';

  app.ESCAPE_KEY = 27;
  app.ENTER_KEY = 13;

  var AppNew = app.AppNew;
  var AppList = app.AppList;
  var AppStats = app.AppStats;

  var Todos = app.Todos;

  var App = React.createClass({

    render: function () {
      return (
        <div>
          <section className="todoapp">
            <AppNew {...this.props} />
            <AppList {...this.props} />
            <AppStats {...this.props} />
          </section>
          <footer className="info">
            <p>Double-click to edit a todo</p>
            <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
          </footer>
        </div>
      );
    }
  });

  // create new collection object
  var collection = new Todos();

  // fetch collection from data source
  collection.fetch({reset: true});

  // transfer todos collection to component as a property
  React.render(<App collection={collection} />, document.getElementById('app'));
})();