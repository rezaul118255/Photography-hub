import React from 'react';
import '../Popular/Popular.css'
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import { Link } from 'react-router-dom';

const Class = ({ PopularClass }) => {
    const { class_name, instructor_name, available_seats, course_fee, admitted_students, image } = PopularClass
    return (
        <div>
            <div className='card grid-container'>
                <div >
                    <img className='h-48 w-72' src={image} alt="" />
                </div>
                <div>
                    <h4> ClassName:{class_name}</h4>
                    <h4>Instructors Name:{instructor_name}</h4>
                </div>
                <div className='flex gap-4'>
                    <h1>price: {course_fee}</h1>
                    <Link><button className='btn btn-primary'>Select</button></Link>
                </div>


            </div>

        </div>
    );
};

export default Class;