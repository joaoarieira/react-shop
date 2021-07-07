import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/CartIcon';
import CartDropdown from '../../components/CartDropdown';

import { auth } from '../../firebase';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './styles.scss';

function Header() {
    const currentUser = useSelector(state => state.user.currentUser);
    const isCartHidden = useSelector(state => state.cart.hidden);

    return (
        <div className="header">
            <div className="header-container">
                <Link className="logo-container" to="/">
                    <Logo className="logo"></Logo>
                </Link>

                <div className="options">
                    <Link className="option" to="/shop">
                        SHOP
                    </Link>

                    <Link className="option" to="/contact">
                        CONTACT
                    </Link>

                    {currentUser ? (
                        <div
                            className="option"
                            onClick={() => auth.signOut()}
                        >
                            SIGN OUT
                        </div>
                    ) :
                        <Link
                            className="option" to="/signin"
                        >
                            SIGN IN
                        </Link>
                    }

                    <CartIcon />
                </div>
            </div>
            {!isCartHidden && <CartDropdown />}
        </div>
    );
}

export default Header;


/*import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './styles.scss';

function Header({ currentUser }) {
    return (
        <div className="header">
            <div className="header-container">
                <Link className="logo-container" to="/">
                    <Logo className="logo"></Logo>
                </Link>

                <div className="options">
                    <Link className="option" to="/shop">
                        SHOP
                    </Link>

                    <Link className="option" to="/contact">
                        CONTACT
                    </Link>

                    {currentUser ? (
                        <div
                            className="option"
                            onClick={() => auth.signOut()}
                        >
                            SIGN OUT
                        </div>
                    ) :
                        <Link
                            className="option" to="/signin"
                        >
                            SIGN IN
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);*/