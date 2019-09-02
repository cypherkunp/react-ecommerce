import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats-page/hats-page.component';
import JacketsPage from './pages/jackets-page/jackets-page.component';
import SneakersPage from './pages/sneakers-page/sneakers-page.component';
import MenPage from './pages/men-page/men-page.component';
import WomenPage from './pages/women-page/women-page.component';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/shop/hats" component={HatsPage} />
                <Route path="/shop/jackets" component={JacketsPage} />
                <Route path="/shop/sneakers" component={SneakersPage} />
                <Route path="/shop/men" component={MenPage} />
                <Route path="/shop/women" component={WomenPage} />
                <Route exact path="/" component={HomePage} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
