import React from 'react';
import _ from 'underscore';
import store from './../store';
import { connect } from 'react-redux';
import StatsComponent from 'src/components/stats.jsx';

const mapStateToProps = function(state, ownProps) {
  return {
    filter: state.filterReducer.filter,
    itemsLeft: _.where(state.todoReducer.todos, {completed: false}).length
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleFilter: (e) => {
      store.dispatch({
        type: 'SET_FILTER'
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);
