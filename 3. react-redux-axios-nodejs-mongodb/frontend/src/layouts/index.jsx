import React from 'react';
// import { Link } from 'react-router';
// import AsideContainer from 'src/containers/aside';

export default React.createClass({
    render: function() {
        return (
          <div className="layout-index">
            {this.props.children}
            {/*
            <section className="todoapp">
              <AppNew {...this.props} />
              <AppList {...this.props} />
              <AppStats {...this.props} />
            </section>
            */}
            <footer className="info">
              <p>Double-click to edit a todo</p>
              <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
              <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
          </div>
        )
    }
});
