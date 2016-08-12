var mongoose = require('mongoose');
var Todo = require('./../models/todo');

/**
 * controllers/todos module.
 * @module controllers/todos
 */

/**
  * POST /api/todos Save new todo.
  * @param {object} req - IncomingMessage.
  * @param {object} res - ServerResponse.
  */
exports.postTodos = function postTodos(req, res) {

  // create todo
  var todo = new Todo({
    _id: mongoose.Types.ObjectId(),
    text: req.body.text
  });

  // save todo
  todo.save(function(err, todo) {
    if (err) {
      console.log(err);
    }

    return res.status(200).json(todo);
  });
};

/**
  * GET /api/todos Get all todos.
  * @param {object} req - IncomingMessage.
  * @param {object} res - ServerResponse.
  */
exports.getTodos = function getTodos(req, res) {

  // find todos
  Todo
  .find()
  .exec(function(err, todos) {
    if (err) {
      console.log(err);
    }

    return res.status(200).json(todos);
  });
};

/**
  * GET /api/todos/:id Get todo by id.
  * @param {object} req - IncomingMessage.
  * @param {object} res - ServerResponse.
  */
exports.getTodo = function getTodo(req, res) {

  // find todo by id
  Todo.findById(req.params.id, function(err, todo) {
    if (err) {
      console.log(err);
    }

    // todo not found
    if (!todo) {
      return res.status(404).send();
    }

    return res.status(200).json(todo);
  });
};

/**
  * PUT /api/todos/:id Update todo by id.
  * @param {object} req - IncomingMessage.
  * @param {object} res - ServerResponse.
  */
exports.putTodo = function putTodo(req, res) {

  // find todo by id
  Todo.findById(req.params.id, function(err, todo) {
    if (err) {
      console.log(err);
    }

    // todo not found
    if (!todo) {
      return res.status(404).send();
    }

    // update todo
    todo.updated = new Date();
    todo.completed = req.body.completed;
    todo.text = req.body.text;

    // save todo
    todo.save(function(err, todo) {
      if (err) {
        console.log(err);
      }

      return res.status(200).json(todo);
    });
  });
};

/**
  * DELETE /api/todos/:id Delete todo by id.
  * @param {object} req - IncomingMessage.
  * @param {object} res - ServerResponse.
  */
exports.deleteTodo = function deleteTodo(req, res) {

  // find todo by id
  Todo.findById(req.params.id, function(err, todo) {
    if (err) {
      console.log(err);
    }

    // todo not found
    if (!todo) {
      return res.status(404).send();
    }

    // remove todo
    todo.remove({_id: req.params.id}, function(err, todo) {
      if (err) {
        console.log(err);
      }

      return res.status(200).send();
    });
  });
};
