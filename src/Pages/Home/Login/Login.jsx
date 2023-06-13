import React, { useContext, useState } from 'react';

import img from '../../../assets/undraw_Mobile_login_re_9ntv.png'

import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const auth = getAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        login(email, password)
            .then(result => {
                const loggedUser = result.user;

                setUser(loggedUser);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });

                // navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)

            });
    }
    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const GoogleUser = result.user;
                const saveUser = { name: GoogleUser.displayName, email: GoogleUser.email }
                fetch('https://assignment-12-server-pi-pearl.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {



                        navigate(from, { replace: true });

                    })
                setUser(GoogleUser)

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <Helmet>
                <title>Photography/login</title>

            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className='text-amber-600'>
                                    {
                                        <p>{error}</p>
                                    }

                                </div>
                                {/* <div>
                                    {
                                        user && toast('user is found ')


                                    }
                                    <ToastContainer></ToastContainer>
                                </div> */}
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-success" type="submit" value="Login" />
                                </div>
                                <div className="form-control mt-6">
                                    {/* <button onClick={handelGoogleSignIn} className="btn btn-outline btn-warning" value="continue with google" placeholder='continue with google' /> */}
                                    <button onClick={handelGoogleSignIn} className="btn btn-outline btn-warning">continue with google</button>

                                </div>

                            </form>
                            <p className='my-4 text-center'>New to Educational toys <Link className='text-orange-200 font-bold' to="/signUp">SignUp</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Login;




// import { useContext, useState } from 'react';

// // import { AuthContext } from '../../providers/AuthProvider';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2'
// import { AuthContext } from '../../../Providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";



//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: 'User Login Successful.',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })
//     }


//     return (
//         <>
//             <Helmet>
//                 <title>Bistro Boss | Login</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col md:flex-row-reverse">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>

//                             <div className="form-control mt-6">
//                                 <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <p><small>New Here? <Link to="/signUp">Create an account</Link> </small></p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;