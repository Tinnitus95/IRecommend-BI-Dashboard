import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import DefaultView from './Views/DefaultView';
import NumberView from './Views/NumberView';
import GraphView from './Views/GraphView';
import LeaderboardView from './Views/LeaderboardView';

export default class ClientContent extends Component {

    render(){
        return (
            <div className="client-content">
                <Switch>
                    <Route path="/dashboard/default" component={DefaultView} />
                    <Route path="/dashboard/numbers" component={NumberView} />
                    <Route path="/dashboard/time" component={GraphView} />
                    <Route path="/dashboard/highscores" component={LeaderboardView} />
                </Switch>
            </div>
        );
    }
}
