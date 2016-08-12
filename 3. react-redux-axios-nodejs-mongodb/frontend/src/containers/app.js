import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as FilterActions from '../actions/FilterActions'
import * as TodoActions from '../actions/TodoActions'

// components
import NewComponent from 'src/components/new.js';
import ListComponent from 'src/components/list.js';
import StatsComponent from 'src/components/stats.js';

class App extends Component {
  render() {
    const { filter, todos, filterActions, todoActions } = this.props
    return (
      <section className="todoapp">
        <NewComponent
          todoActions={todoActions} />
        <ListComponent
          filter={filter}
          todos={todos}
          todoActions={todoActions} />
        <StatsComponent
          filter={filter}
          todos={todos}
          filterActions={filterActions}
          todoActions={todoActions} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter,
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterActions: bindActionCreators(FilterActions, dispatch),
    todoActions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
