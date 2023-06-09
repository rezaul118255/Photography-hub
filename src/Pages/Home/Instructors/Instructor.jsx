import React from 'react';
import "../Popular/Popular.css"

const Instructor = ({ teacher }) => {
    const { class_name, instructor_name, email, enrolStudent, image } = teacher
    return (
        <div>
            <div className='card grid-container'>
                <div >
                    <img className='h-48 w-72' src={image} alt="" />
                </div>
                <div>
                    <h4> Category:{class_name}</h4>
                    <h4>Publised date:{instructor_name}</h4>
                    <h4>Email:{email}</h4>
                </div>
                <div className='flex gap-4'>
                    <h4>EnrolStudent:{enrolStudent}</h4>


                </div>



            </div>

        </div>
    );
};

export default Instructor;