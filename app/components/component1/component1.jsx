require('./component1.scss');

import React from 'react';
import Component2 from 'components/component2/component2.jsx';

export default React.createClass({
  render: function() {
    return (
      <div className="row" id="content">
        <div className="medium-8 columns component_1">
          <div className="greeting">
            {this.props.name}
          </div>
        </div>
        <div className="medium-4 columns component_2">
          <Component2 name="Component 2" />
        </div>
      </div>
    );
  },
});
