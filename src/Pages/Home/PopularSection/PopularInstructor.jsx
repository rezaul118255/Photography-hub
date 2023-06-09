import React from 'react';
import "../Popular/Popular.css"
import { Link } from 'react-router-dom';

const PopularInstructor = ({ teacher }) => {
    const { class_name, instructor_name, email, enrolStudent, image } = teacher

    return (
        <div>

            <div className='card grid-container'>
                <div >
                    <img className='h-48 w-72' src={image} alt="" />
                </div>
                <div>
                    <h4>Name:{instructor_name}</h4>
                    <h4>Class:{class_name}</h4>
                    <h4> email:{email}</h4>

                </div>
                <div className='flex gap-4'>
                    <h1>Student {enrolStudent}</h1>

                </div>


            </div>
        </div>
    );
};

export default PopularInstructor;