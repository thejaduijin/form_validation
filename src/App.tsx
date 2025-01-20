import './App.css'
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const checkLogIn = localStorage.getItem("checkLogIn");
  const checkSignUp = localStorage.getItem("checkSignUp");

  
  return (
    <>
      {checkLogIn ? <HomePage /> : checkSignUp ? <LoginForm></LoginForm> : <SignupForm></SignupForm>}
    </>
  )
}

export default App
