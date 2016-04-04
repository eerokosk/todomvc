var app = app || {};

(function () {
  'use strict';

  app.Todos = Backbone.Collection.extend({

    url: '/api/todos',

    // collection consists of todo models
    model: app.Todo,

    // filter completed todo items
    completed: function () {
      return this.where({completed: true});
    },

    // filter remaining (not completed) todo items
    remaining: function () {
      return this.where({completed: false});
    },

    // new sequential order number for new todo model
    nextOrder: function () {
      return this.length ? this.last().get('order') + 1 : 1;
    },

    // maintain collection sort order by order attribute
    comparator: 'order'
  });
})();
