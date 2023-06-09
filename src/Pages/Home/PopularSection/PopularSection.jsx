import React, { useEffect, useState } from 'react';
import Title from '../../../Component/Title/Title';
import PopularInstructor from './PopularInstructor';

const PopularSection = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/Instructors')
            .then(res => res.json())
            .then(data => {
                const bestInstructor = data.filter(item => item.enrolStudent > 30);
                setInstructor(bestInstructor)
            })
    }, [])
    return (
        <div>
            <Title heading={"Instructors"}
                subHeading={"Best Instructors of our school "}>

            </Title>
            <div className='mt-5 gap-4 grid md:grid-cols-3'>
                {
                    instructor.map(teacher => <PopularInstructor
                        key={teacher.id}
                        teacher={teacher}
                    ></PopularInstructor>)

                }
            </div>
        </div>
    );
};

export default PopularSection;