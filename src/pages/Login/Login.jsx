import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ForgetPassword from '../ForgetPassword/ForgetPassword';

const Login = () => {

    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();

    const { loginUser, loginWithGoogle, resetUserPassword } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');

    // const [emailChangeValue, setEmailChangeValue] = useState('');

    const emailRef = useRef(null);
    const emailRefValue = emailRef.current?.value;
    console.log('emailRefValue', emailRefValue);
    // <ForgetPassword email={email}></ForgetPassword>

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                // console.log('emailRefValue', emailRefValue);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    // const handleEmailChange = (e) => {
    //     console.log(e.target.value);
    //     setEmailChangeValue(e.target.value);
    // }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    const handleForgotPassword = () => {
    const emailRefValue = emailRef.current?.value;
    console.log('get me an email address', emailRefValue);
    if (!emailRefValue) {
        alert('Please provide a valid email address.');
    }
    else {
        // navigate('/forgetPassword');
    //     <ForgetPassword emailChange={emailChange}></ForgetPassword>
    // return <Navigate to='/forgetPassword' emailChange={emailChange}></Navigate>;
    resetUserPassword(emailRefValue)
                .then(() => {
                    alert('Please check your email, password reset mail is sent to ' + emailRefValue);
                    // navigate('../https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/');
                })
                .catch((error) => {
                    console.log(error.message);
                    setErrorMessage(error.message);
                });
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input ref={emailRef} type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            {/* <div><Link to="/forgetPassword" className="link link-hover">Forgot password?</Link></div> */}
                            {/* <div><Link to={`/forgetPassword/${emailRefValue}`} className="link link-hover">Forgot password?</Link></div> */}

                            {/* <ForgetPassword emailRefValue={emailRefValue}></ForgetPassword> */}

                            {/* <a onClick={() => handleForgotPassword} className="link link-hover">Forgot password?</a> */}
                            <div onClick={handleForgotPassword} className='mt-4 lg:mt-5'>
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            <button className="btn text-base-100 bg-[#5FCF80] mt-4">Login</button>

                        </form>
                        {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>
                        }
                        {/* <div onClick={handleForgotPassword} className='mt-4 lg:mt-5'>
                            <a className="link link-hover">Forgot password?</a>
                        </div> */}
                        {/* <div className='mt-4 lg:mt-5'>
                            <a className="link link-hover">Forgot password?</a>
                        </div> */}

                        {/* <div><Link to='/forgetPassword' className="link link-hover">Forgot password?</Link></div> */}

                        <p className='m-2 md:m-3 lg:m-4 font-semibold'>New to this website? Please <Link to='/register'>Register</Link></p>

                        {/* Google */}
                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        {/* {
                            emailChangeValue ? <>
                                <ForgetPassword emailChangeValue={emailChangeValue}></ForgetPassword>
                            </> : ""
                        } */}
                        {/* <ForgetPassword emailChange={emailChange}></ForgetPassword> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;