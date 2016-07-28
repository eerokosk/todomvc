var app = app || {};

(function () {
  'use strict';

  var TodoRouter = Backbone.Router.extend({

    routes: {
      '*filter': 'setFilter'
    },

    setFilter: function (param) {
      // set todo filter
      app.TodoFilter = param || '';
    }
  });

  app.TodoRouter = new TodoRouter();

  // start to handle hashchange events
  Backbone.history.start();
})();
