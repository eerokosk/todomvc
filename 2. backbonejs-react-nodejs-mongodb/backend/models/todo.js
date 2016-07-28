var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('validator');

/**
 * models/todo module.
 * @module models/todo
 */

/**
  * Todo schema.
  */
var TodoSchema = new Schema({
  _id: Schema.Types.ObjectId,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  order: { type: Number },
  title: { type: String, required: true,
    validate: {
      validator: function(value) {
        return validator.isLength(validator.trim(value), 1, 100);
      }
    }
  }
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
