import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Instructor from './Instructor';
import Title from '../../../Component/Title/Title.jsx';

const Instructors = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/Instructors')
            .then(res => res.json())
            .then(data => setInstructor(data))
        // .then(data => {
        //     const bestInstructor = data.filter(item => item.enrolStudent > 30);
        //     setInstructor(bestInstructor)
        // })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Photography/Instructor</title>

            </Helmet>
            <Title subHeading={"All Instructors are here"}
                heading={"All Instructors "}>

            </Title>
            <div className='mt-5 gap-4 grid md:grid-cols-3'>
                {
                    instructor.map(teacher => <Instructor
                        key={teacher.id}
                        teacher={teacher}
                    ></Instructor>

                    )

                }
            </div>
        </div>
    );
};

export default Instructors;