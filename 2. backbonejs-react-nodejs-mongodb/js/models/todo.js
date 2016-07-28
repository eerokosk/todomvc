var app = app || {};

(function () {
  'use strict';

  app.Todo = Backbone.Model.extend({

    idAttribute: '_id',

    urlRoot: '/api/todos',

    // default attributes for todo object
    defaults: {
      title: '',
      completed: false
    },

    // model validator
    validate: function(attrs, options) {
      if (_.isEmpty(attrs.title)) {
        return "Invalid todo";
      }
    },

    // toggle completed state of this todo item
    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
  });
})();
