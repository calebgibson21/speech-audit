import { useRef } from 'react';
import { useAuth } from '../components/Auth';
import { useNavigate, Link } from 'react-router-dom';

export function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

 // Get signUp function from the auth context
 const { signIn } = useAuth()

 const navigate = useNavigate()

 async function handleSubmit(e) {
   e.preventDefault()

   // Get email and password input values
   const email = emailRef.current.value
   const password = passwordRef.current.value

   // Calls `signIn` function from the context
   const { error } = await signIn({ email, password })

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

        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}

export default Login;

// const SignIn = () => {
//     const [loading, setLoading] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     const handleSignIn = async (email) => {
//         try {
//           setLoading(true)
//           const { error } = await supabaseClient.auth.signIn({ email })
//           if (error) throw error
//           alert('Check your email for the login link!')
//         } catch (error) {
//           alert(error.error_description || error.message)
//         } finally {
//           setLoading(false)
//         }
//       }

//       return (
//         <div className="row flex flex-center">
//           <div className="col-6 form-widget">
//             <h1 className="header">Supabase + React</h1>
//             <p className="description">Sign in via magic link with your email below</p>
//             <div>
//               <input
//                 className="inputField"
//                 type="email"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <button
//                 onClick={(e) => {
//                   e.preventDefault()
//                   handleSignIn(email)
//                 }}
//                 className={'button block'}
//                 disabled={loading}
//               >
//                 {loading ? <span>Loading</span> : <span>Send magic link</span>}
//               </button>
//             </div>
//           </div>
//         </div>
//       )
//     }


// export default SignIn