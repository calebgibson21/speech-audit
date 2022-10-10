import {useEffect, useState} from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/Auth';
import useRenderCounter from './hooks/renderCounter';
import { supabaseClient } from './lib/supabase';
import Home from './pages/home';



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
            /* <Route path='/' element={
             
                  <Home />
                
            } /> 
            {/* <Route path="Login" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} /> */}
            {/* <Route path="/" element={<MockInterview />} /> */}
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}  

export default App;
