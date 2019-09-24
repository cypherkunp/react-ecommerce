import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from './../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currentUser ? (
                    <Link
                        className="option option-sign-out"
                        to="/signOut"
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </Link>
                ) : (
                    <Link className="option option-sign-in" to="/signIn">
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
