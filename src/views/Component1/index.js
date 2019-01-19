import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Desktop from './desktop';
import Mobile from './mobile';

import './style.scss';

class Component1 extends Component {
  render() {
    return (
      <div className="component1-wrapper">
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

export default Component1;
