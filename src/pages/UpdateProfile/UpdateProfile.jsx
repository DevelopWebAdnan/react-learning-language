import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {

    const [updateError, setUpdateError] = useState('');

    const { updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    // const nameRef = useRef();
    // const photoRef = useRef();
    
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        if(name.length < 5) {
            setUpdateError('Name must be 5 characters or longer');
            return;
        }

        const updatedData = {
            displayName: name,
            photoURL: photo
        }

        updateUser(updatedData)
        .then(() => {
            console.log('Profile updated!');
            navigate('/myProfile');
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Update Profile now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleUpdateProfile} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            <label className="label">Photo-URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo-url" required />
                            <button className="btn font-bold text-base-100 bg-[#5FCF80] mt-4">Update Profile</button>

                        </form>
                         {
                            updateError && <p className='text-red-500'>{updateError}</p>
                        }

                        {/* <p className='m-2 md:m-3 lg:m-4 font-semibold'>Already have an account? Please <Link to='/login'>Login</Link></p> */}

                        {/* Google */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;