import React from 'react';
import { asyncComponent } from 'react-async-component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Main() {
    const Home = asyncComponent({
        resolve: () => import('scenes/Home'),
    });

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
