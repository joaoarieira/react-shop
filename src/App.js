import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import { auth, createUserProfileDocument } from './firebase';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        //console.log(currentUser);
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, []);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
