
import { Routes , Route } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './components/context/Authcontext';
import Navbar from './components/Navbar';
import Protectedroute from './components/Protectedroute';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/account'element={<Protectedroute><Account></Account></Protectedroute>}></Route>
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
