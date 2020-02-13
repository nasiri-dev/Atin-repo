import React, { Component } from 'react';
import {BrowserRouter as Router,Route,link} from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path = "/" component = {Users} />
                    <Route exact path = "favorite" component = {Favorite} />
                </div>
            </Router>
        );
    }
}

export default Router;