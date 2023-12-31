import React, { useContext, useState } from 'react';
import '../Popular/Popular.css'
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Class = ({ PopularClass }) => {
    // const { class_name, instructor_name, available_seats, course_fee, admitted_students, image } = PopularClass
    const { class_name, instructor_name, available_seats, course_fee, admitted_students, image, id } = PopularClass
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isClassAdded, setClassAdded] = useState(false);
    const handelAddToCart = PopularClass => {
        console.log(PopularClass)
        if (user && user.email) {
            const orderItem = { menuItemId: id, class_name, instructor_name, available_seats, course_fee, image, email: user.email }
            fetch('https://assignment-12-server-pi-pearl.vercel.app/Carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setClassAdded(true);

                    }
                })




        }
        else {
            Swal.fire({
                title: 'Please login to select Class',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div>
            <div className='card grid-container'>
                <div >
                    <img className='h-48 w-72' src={image} alt="" />
                </div>
                <div>
                    <h4> <span className='text-lg font-bold '> Class name:</span>{class_name}</h4>
                    <h4><span className='text-lg font-bold '>Instructor:</span>{instructor_name}</h4>
                    <h4><span className='text-lg font-bold '>Enroll Student:</span>{admitted_students}</h4>
                </div>
                <div className='flex gap-4'>
                    <h1><span className='text-lg font-bold '>price:</span> {course_fee}</h1>
                    {/* <Link><button onClick={() => handelAddToCart(PopularClass)} className='btn btn-primary'>Select</button></Link>
                     */}
                    <button
                        onClick={() => handelAddToCart(PopularClass)}
                        className='btn btn-primary'
                        disabled={isClassAdded}
                    >
                        {isClassAdded ? 'Added' : 'Select'}
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Class;