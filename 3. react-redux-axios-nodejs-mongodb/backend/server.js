// express
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todosController = require('./controllers/todos');

app.use(cors());

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// assets
app.use('/jsdoc/', express.static(__dirname + '/jsdoc/'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// connect to database
mongoose.connect('mongodb://localhost:27017/todomvc');

// create router
var router = express.Router();

// todos endpoints
router.route('/todos')
  .post(todosController.postTodos)
  .get(todosController.getTodos);

// todos/:id endpoints
router.route('/todos/:id')
  .get(todosController.getTodo)
  .put(todosController.putTodo)
  .delete(todosController.deleteTodo);

// prefix endpoints with /api
app.use('/api', router);

// start
app.listen(8000);

console.log('Server started at http://127.0.0.1:8000');
