import React from 'react';
import store from './../store';
import { connect } from 'react-redux';
import ItemComponent from 'src/components/item.jsx';

const stateToProps = function(state) {
  return {};
};

const dispatchToProps = function(dispatch) {
  return {
    handleDestroy: () => {
      console.log('handleDestroy');
    }
  };
};

export default connect(stateToProps, dispatchToProps)(ItemComponent);
