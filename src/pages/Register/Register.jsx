import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Sign Up now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo url" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            <button className="btn btn-neutral mt-4">Register</button>

                        </form>
                            <p className='m-2 md:m-3 lg:m-4 font-semibold'>Already have an account? Please <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;