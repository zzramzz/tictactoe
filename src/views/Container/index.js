import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Desktop from './desktop';
import Mobile from './mobile';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import * as actionCreator from './../../actions';

import './style.scss';

class Container extends Component {
  render() {
    return (
      <div className="container-wrapper">
        <MediaQuery query="(max-width: 768px)">
          <Mobile {...this.props} />
        </MediaQuery>
        <MediaQuery query="(min-width: 769px)">
          <Desktop {...this.props} />
        </MediaQuery>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // return bindActionCreators({...actionCreator}, dispatch)
};

const mapStateToProps = state => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);