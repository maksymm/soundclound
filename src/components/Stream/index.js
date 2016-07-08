import React from 'react';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth.dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
