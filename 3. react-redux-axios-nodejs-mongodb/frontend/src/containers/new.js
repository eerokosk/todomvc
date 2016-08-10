import React from 'react';
import store from './../store';
import { connect } from 'react-redux';
import NewComponent from 'src/components/new.jsx';

const stateToProps = function(state) {
  return {};
};

export default connect(stateToProps)(NewComponent);
