import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import useRenderCounter from './hooks/renderCounter';
import Home from './pages/home';
import Auth from './components/Auth';


function App() {

  useRenderCounter('App');

  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}  

export default App;
