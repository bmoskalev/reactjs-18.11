import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from './routes';

ReactDom.render(
    <div>
        <BrowserRouter>
            <Switch>
                {routes.map((route, idx) => <Route key={idx} {...route} />)}
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root'),
);