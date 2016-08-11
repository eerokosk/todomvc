import React from 'react';

export default React.createClass({
    render: function() {
        return (
          <div className="layout-index">
            {this.props.children}
            <footer className="info">
              <p>Double-click to edit a todo</p>
              <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
              <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
          </div>
        )
    }
});
