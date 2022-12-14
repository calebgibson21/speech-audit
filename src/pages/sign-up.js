import {useRef} from 'react';
import { useAuth } from '../components/Auth';
import { useNavigate, Link } from 'react-router-dom';

export function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
  
    // Get signUp function from the auth context
  const { signUp } = useAuth()

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password })

    if (error) {
      alert('error signing in')
    } else {
      // Redirect user to Dashboard
      navigate('/')
    }
  }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-email">Email</label>
          <input id="input-email" type="email" ref={emailRef} />
  
          <label htmlFor="input-password">Password</label>
          <input id="input-password" type="password" ref={passwordRef} />
  
          <br />
  
          <button type="submit">Sign up</button>
        </form>
        < br />
        <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      </>
    )
  }

  export default Signup;

// const SignUp = ({session}) => {
//     const [loading, setLoading] = useState(true)
//     const [username, setUsername] = useState(null)
//     const [website, setWebsite] = useState(null)
//     const [avatar_url, setAvatarUrl] = useState(null)
  
//     useEffect(() => {
//       getProfile()
//     }, [session])
  
//     async function getProfile() {
//       try {
//         setLoading(true)
//         const user = supabaseClient.auth.user()
  
//         let { data, error, status } = await supabaseClient
//           .from('profiles')
//           .select(`username, website, avatar_url`)
//           .eq('id', user.id)
//           .single()
  
//         if (error && status !== 406) {
//           throw error
//         }
  
//         if (data) {
//           setUsername(data.username)
//           setWebsite(data.website)
//           setAvatarUrl(data.avatar_url)
//         }
//       } catch (error) {
//         alert(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }
  
//     async function updateProfile({ username, website, avatar_url }) {
//       try {
//         setLoading(true)
//         const user = supabaseClient.auth.user()
  
//         const updates = {
//           id: user.id,
//           username,
//           website,
//           avatar_url,
//           updated_at: new Date(),
//         }
  
//         let { error } = await supabaseClient.from('profiles').upsert(updates, {
//           returning: 'minimal', // Don't return the value after inserting
//         })
  
//         if (error) {
//           throw error
//         }
//       } catch (error) {
//         alert(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }
//     return (
//         <div className="form-widget">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input id="email" type="text" value={session.user.email} disabled />
//           </div>
//           <div>
//             <label htmlFor="username">Name</label>
//             <input
//               id="username"
//               type="text"
//               value={username || ''}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="website">Website</label>
//             <input
//               id="website"
//               type="website"
//               value={website || ''}
//               onChange={(e) => setWebsite(e.target.value)}
//             />
//           </div>
    
//           <div>
//             <button
//               className="button block primary"
//               onClick={() => updateProfile({ username, website, avatar_url })}
//               disabled={loading}
//             >
//               {loading ? 'Loading ...' : 'Update'}
//             </button>
//           </div>
    
//           <div>
//             <button className="button block" onClick={() => supabaseClient.auth.signOut()}>
//               Sign Out
//             </button>
//           </div>
//         </div>
//       )
//     }

// export default SignUp