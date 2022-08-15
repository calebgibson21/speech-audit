import '../App.css';
import logo from '../images/flash-cards 1.png';
import { useNavigate } from 'react-router';
import { useAuth } from './Auth';

const Header = () => {
    // Get current user and signOut function from context
    const { user, signOut } = useAuth()

    const navigate = useNavigate()
  
    async function handleSignOut() {
      // Ends user session
      await signOut()
  
      // Redirects the user to Login page
      navigate('/login')
    }
  return (<>
  <div className='header'>
      <div className='container'>
          <div className='header-row'>
            <div>
              <div className='header-logo'>
              <h1 style={{color: "#1161D4"}}>PM Flashcards</h1>
              <img src={logo} alt='flashcard-logo' style={{height: "100%"}}/>
              </div>
                <p>Welcome, {user?.id}!</p>
              </div>
              <div>
          {/* Change it to display the user ID too 👇*/}
          <button className="button" onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Header