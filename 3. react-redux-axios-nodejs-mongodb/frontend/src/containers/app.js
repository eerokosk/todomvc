import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as TodoActions from '../actions/TodoActions'

// components
import NewComponent from 'src/components/new.js';
import ListComponent from 'src/components/list.js';
import StatsComponent from 'src/components/stats.js';

class App extends Component {
  render() {
    const { routing, todos, todoActions } = this.props
    return (
      <section className="todoapp">
        <NewComponent
          todoActions={todoActions} />
        <ListComponent
          todos={todos}
          todoActions={todoActions} />
        <StatsComponent
          todos={todos}
          todoActions={todoActions} />
      </section>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
