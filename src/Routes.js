import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Page1 from './core/Page1';
import Page2 from './core/Page2';
import Print from './core/Print';
const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={Page1}/>
                <Route path="/page2" exact component={Page2}/>
                <Route path="/print" exact component={Print}/>
            </Switch>
        </Router>
    );
}
 
export default Routes;