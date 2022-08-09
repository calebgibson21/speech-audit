import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import useRenderCounter from './hooks/renderCounter';


function App() {

  useRenderCounter('App');

  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}  

export default App;
