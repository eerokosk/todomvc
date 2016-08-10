import React from 'react';
import store from './../store';
import { connect } from 'react-redux';
import StatsComponent from 'src/components/stats.jsx';

const stateToProps = function(state) {
  return {};
};

export default connect(stateToProps)(StatsComponent);
