import Body from "../components/Body"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import { useAuth } from "../components/Auth";
// import { useNavigate } from "react-router-dom";


const Home = () => {

    // Get current user and signOut function from context
    // const { user, signOut } = useAuth()

    // const navigate = useNavigate()
  
    // async function handleSignOut() {
    //   // Ends user session
    //   await signOut()
  
    //   // Redirects the user to Login page
    //   navigate('/login')
    // }
  return (
    <>
        <Header/>
        <Body />
        <Footer />
    </>
  )
}

export default Home