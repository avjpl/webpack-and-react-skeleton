require('./component2.scss');

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="warning">{this.props.name}</div>
      </div>
    );
  },
});
