import React from 'react';
import { Link } from 'react-router-dom';
import "./Popular.css"

const Popular = ({ PopularClass }) => {
    const { class_name, instructor_name, available_seats, course_fee, admitted_students, image } = PopularClass
    return (
        <div>
            <div className='card grid-container'>
                <div className='h-48 w-64' >
                    <img src={image} alt="" />
                </div>
                <div>
                    <h4> Category:{class_name}</h4>
                    <h4>Publised date:{instructor_name}</h4>
                </div>
                <div className='flex gap-4'>
                    <h1>price: {course_fee}</h1>
                    <Link to="/"><button className='btn btn-primary'>view Details</button></Link>
                </div>


            </div>

        </div>
    );
};

export default Popular;