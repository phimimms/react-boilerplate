import React from 'react';
import { asyncComponent } from 'react-async-component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Main() {
    const Landing = asyncComponent({
        resolve: () => import('scenes/Landing'),
    });

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}
