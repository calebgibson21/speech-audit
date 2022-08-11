import {useEffect, useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/privateRoute';
import useRenderCounter from './hooks/renderCounter';
import { supabaseClient } from './lib/supabase';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import { useAuth } from './components/Auth';


function App() {

  const [session, setSession] = useState(null);
  
  useRenderCounter('App');
  
  useEffect(() => {
    setSession(supabaseClient.auth.session());

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    <div className="App">
      <div className="App-header">
        <AuthProvider>
          <Routes>
            <Route path='/' element={
              <PrivateRoute >
                  <Home />
                </PrivateRoute>
            } />
            <Route path="Login" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}  

export default App;
