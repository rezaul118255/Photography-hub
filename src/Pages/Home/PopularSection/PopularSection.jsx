import React, { useEffect, useState } from 'react';
import Title from '../../../Component/Title/Title';
import PopularInstructor from './PopularInstructor';

const PopularSection = () => {
    // const [instructor, setInstructor] = useState([])
    // useEffect(() => {
    //     fetch('https://assignment-12-server-pi-pearl.vercel.app/Instructors')
    //         .then(res => res.json())
    //         .then(data => {
    //             const bestInstructor = data.filter(item => item.enrolStudent > -1);
    //             setInstructor(bestInstructor)
    //         })
    // }, [])


    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-pi-pearl.vercel.app/Instructors')
            .then(res => res.json())
            .then(data => {
                const topInstructors = data
                    .filter(item => item.enrolStudent > -1)
                    .sort((a, b) => b.enrolStudent - a.enrolStudent)
                    .slice(0, 6);
                setInstructor(topInstructors);
            });
    }, []);
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