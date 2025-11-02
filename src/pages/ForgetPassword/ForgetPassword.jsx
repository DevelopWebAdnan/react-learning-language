import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const ForgetPassword = ({emailChangeValue}) => {

    console.log('emailChangeValue', emailChangeValue);

    const {user, resetUserPassword} = useContext(AuthContext);
    console.log('user', user);

    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        console.log('get me an email address', emailChangeValue);
        if(!emailChangeValue){
            console.log('Please provide a valid email address.')
        }
        else {
            resetUserPassword(emailChangeValue)
            .then(() => {
                console.log('Password reset email sent to ' + emailChangeValue);
                navigate('../https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox');
            });
            // .catch((error) => {
            //     alert("ERROR", error.message);
            // })
        }
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col h-96 md:h-[600px]">
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Reset Password now!</h1>
                    <p className="py-6 text-lg md:text-xl lg:text-2xl">User Email: {emailChangeValue}</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleResetPassword} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" defaultValue={emailChangeValue} required />

                            <button className="btn btn-neutral mt-4">Reset Password</button>

                        </form>
                        {/* {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>
                        }

                        <p className='m-2 md:m-3 lg:m-4 font-semibold'>New to this website? Please <Link to='/register'>Register</Link></p> */}

                        {/* Google */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;