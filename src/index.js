import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/style/page.css';

import Home from './pages/Home';
import Detail from './pages/Detail';

ReactDom.render(
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
    </Router>, 
    document.getElementById('root')
);