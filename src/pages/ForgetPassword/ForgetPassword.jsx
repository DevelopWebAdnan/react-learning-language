// import { auth } from "../../firebase/firebase.init";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


// const ForgetPassword = () => {

//     // console.log(emailRef);

//     const {user, updatePassword} = useContext(AuthContext);

//     const navigate = useNavigate();

//     const handleResetPassword = (e) => {
//         e.preventDefault();
//         console.log('get me an email address');
//         if(!user?.email){
//             console.log('Please provide a valid email address.')
//         }
//         else {
//             updatePassword(auth, user.email)
//             .then(() => {
//                 console.log('Password reset email sent!');
//                 navigate('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox');
//             });
//             // .catch((error) => {
//             //     alert("ERROR", error.message);
//             // })
//         }
//     }

//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col">
//                 <div className="text-center">
//                     <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Reset Password now!</h1>
//                     <p className="py-6 text-lg md:text-xl lg:text-2xl">User Email: {user && user?.email}</p>
//                 </div>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <div className="card-body">
//                         <form onSubmit={handleResetPassword} className="fieldset">
//                             <label className="label">Email</label>
//                             <input type="email" name='email' className="input" placeholder="Email" required />

//                             <button className="btn btn-neutral mt-4">Reset Password</button>

//                         </form>
//                         {/* {
//                             errorMessage && <p className='text-red-500'>{errorMessage}</p>
//                         }

//                         <p className='m-2 md:m-3 lg:m-4 font-semibold'>New to this website? Please <Link to='/register'>Register</Link></p> */}

//                         {/* Google */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ForgetPassword;