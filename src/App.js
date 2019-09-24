import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats-page/hats-page.component';
import JacketsPage from './pages/jackets-page/jackets-page.component';
import SneakersPage from './pages/sneakers-page/sneakers-page.component';
import MenPage from './pages/men-page/men-page.component';
import WomenPage from './pages/women-page/women-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component';
import SignOut from './pages/sign-out/sign-out.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        console.log('componentDidMount');
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(async userSnapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: userSnapshot.id,
                            ...userSnapshot.data()
                        }
                    });
                });
            }
            setCurrentUser({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="app">
                <div>
                    <Header />
                </div>
                <div className="app-content">
                    <Switch>
                        <Route path="/shop/hats" component={HatsPage} />
                        <Route path="/shop/jackets" component={JacketsPage} />
                        <Route path="/shop/sneakers" component={SneakersPage} />
                        <Route path="/shop/men" component={MenPage} />
                        <Route path="/shop/women" component={WomenPage} />
                        <Route exact path="/shop" component={ShopPage} />
                        <Route exact path="/contact" component={SignInSignUpPage} />
                        <Route exact path="/signIn" component={SignInSignUpPage} />
                        <Route exact path="/signOut" component={SignOut} />
                        <Route exact path="/" component={HomePage} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    null,
    mapDispatchToProps
)(App);
