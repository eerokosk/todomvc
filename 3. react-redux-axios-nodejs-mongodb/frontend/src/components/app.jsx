import React from 'react';

// containers
import NewContainer from 'src/containers/new.js';
import ListContainer from 'src/containers/list.js';
import StatsContainer from 'src/containers/stats.js';

export default React.createClass({
  render: function() {
    return (
      <section className="todoapp">
        <NewContainer />
        <ListContainer />
        <StatsContainer />
      </section>
    )
  }
});
