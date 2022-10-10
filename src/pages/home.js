import AudioRecorder from "../components/AudioRecorder"
import Body from "../components/Body"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MyEditor from "../components/TextEditor"
import TimerController from "./mock-interview"
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
        <TimerController />
        <AudioRecorder />
        <MyEditor />
        <Footer />
    </>
  )
}

export default Home