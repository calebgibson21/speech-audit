import '../App.css';
import logo from '../images/flash-cards 1.png';

const Header = () => {
  return (<>
  <div className='header'>
      <div className='container'>
          <div className='header-row'>
            <div className='header-logo'>
              <h1 style={{color: "#1161D4"}}>PM Flashcards</h1>
              <img src={logo} alt='flashcard-logo' style={{height: "100%"}}/>
            </div>
            <h1>Other Copy</h1>
          </div>
      </div>
  </div>
    </>
  )
}

export default Header