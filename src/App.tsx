import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(false);


  useEffect(() => {
    const checkLogIn = localStorage.getItem("checkLogIn");
    if (checkLogIn) {
      setIsLoggedIn(true);
    }

    const checkSignUp = localStorage.getItem("checkSignUp");
    if (checkSignUp) {
      setSignedUp(true);
    }
  }, []);


  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <>
      {signedUp ? <LoginForm></LoginForm> : <SignupForm></SignupForm>}
    </>
  )
}

export default App
