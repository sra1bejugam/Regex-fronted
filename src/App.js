import { withRouter } from 'react-router'
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "views/Index.js";
import Page from "views/page.js";
import React, { Component }  from 'react';
import rg4js from 'raygun4js';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.history.listen((location, action) => {
            rg4js('trackEvent', { type: 'pageView', path: location.pathname });
        });

    }

    render() {
        return (
            <Switch>
                <Route path="/index" render={(props) => <Index {...props} />} />
                <Route path="/patterns" render={(props) => <Page {...props} />} />
                <Redirect to="/index" />
                <Redirect from="/" to="/index" />
            </Switch>
        );
    }
}
export default withRouter(App);
