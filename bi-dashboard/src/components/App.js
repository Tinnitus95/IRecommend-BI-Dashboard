import React, {Component} from 'react';
import Aux from './ReactAux';
import {makeMainRoutes} from './Routes';

const routes = makeMainRoutes();

export default class App extends Component {
    render(){
        return(
            <Aux>
                {routes}
            </Aux>
        );
    }
}
