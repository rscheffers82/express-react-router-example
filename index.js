import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, ConnectedRouter } from 'react-router-redux';
import { BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom';         //Always use react-router-dom
import {store} from './public/Store/store';
import { createBrowserHistory } from 'history';
import App from './public/Components/App';

//import './index.css'
console.log(store)
const target = document.getElementById('root')
const history = syncHistoryWithStore(createBrowserHistory(), store)
console.log(history)



const Hello = () => (
    <div>You have entered the hello route, welcome :)</div>
);

const Error404 = () => (
    <div>Nothing here...</div>
);


render(
  <Provider store={store}>
    <Router>
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/hello'}>Hello page</Link></li>
                <li><Link to={'/rubbish'}>Invalid link</Link></li>
            </ul>

            <Switch>
                <Route exact path={'/'} component={App} />
                <Route path={'/hello'} component={Hello} />
                <Route component={Error404} />
            </Switch>
        </div>
    </Router>
  </Provider>,
  target
);

//ReactDOM.render(<App />, document.getElementById('root'));

