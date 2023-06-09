// import React, { useContext } from 'react';
// import { AuthContext } from '../../../Providers/AuthProvider';
// import img from '../../../assets/undraw_Sign_up_n6im.png'
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

// const SignUp = event => {
//     const { createUser } = useContext(AuthContext);

//     const handlerRegister = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const photoUrl = form.photo_url.value;
//         const password = form.password.value;
//         console.log(name, email, password, photoUrl)

//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log('created user', user)
//             })
//             .catch(error => console.log(error))

//     }
//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <Helmet>
//                 <title>Photography/SignUp</title>

//             </Helmet>
//             <div className="hero-content flex-col lg:flex-row">
//                 <div className="w-1/2 mr-12">
//                     <img src={img} alt="" />
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                         <form onSubmit={handlerRegister}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">photo_url</span>
//                                 </label>
//                                 <input type="url" name='photo_url' placeholder="photo url" className="input input-bordered" />
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Confirm Password</span>
//                                 </label>
//                                 <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Sign Up" />
//                             </div>
//                         </form>
//                         <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;



import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import img from '../../../assets/undraw_Sign_up_n6im.png'
// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // updateUserProfile(data.name, data.photoURL)
                //     .then(() => {
                //         // console.log('user profile info updated')
                //         reset();
                //         Swal.fire({
                //             position: 'top-end',
                //             icon: 'success',
                //             title: 'User created successfully.',
                //             showConfirmButton: false,
                //             timer: 1500
                //         });
                //         navigate('/');

                //     })
                //     .catch(error => console.log(error))
            })
    };
    return (
        <>
            <Helmet>
                <title>Resturent | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="">
                            <img src={img} alt="" />
                        </div>
                        {/* <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-yellow-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-yellow-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-yellow-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-yellow-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-yellow-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-yellow-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-yellow-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;