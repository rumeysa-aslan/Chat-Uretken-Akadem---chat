import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  return (
    {user ?  <Chat /> :  <SignIn />}
   <SignIn />
  
  );
}

export default App;
