import React, { useEffect } from 'react';

import Header from './components/Header';
import Routes from './routes';
import { auth, createUserProfileDocument } from './firebase';

import './App.css';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          const userData = {
            id: snapShot.id,
            ...snapShot.data()
          }
          dispatch(setCurrentUser(userData));
        });

      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;

/*
import React, { useEffect } from 'react';

import Header from './components/Header';
import Routes from './routes';
import { auth, createUserProfileDocument } from './firebase';

import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';


function App({ setCurrentUser }) {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          const userData = {
            id: snapShot.id,
            ...snapShot.data()
          }
          setCurrentUser(userData);
        });

      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser]);

  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
*/