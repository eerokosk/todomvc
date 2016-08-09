import React from 'react';
import { Link } from 'react-router';
import AsideContainer from 'src/containers/aside';

export default React.createClass({
    render: function() {
        return (
            <div className="layout-page">
              <p>layout: page</p>
                <nav>
                    <Link to="/">Home</Link><br />
                    <Link to="/widgets">Widgets</Link><br />
                    <Link to="/users">Users</Link>
                </nav>
                <AsideContainer />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
});
