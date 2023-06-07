import React, { useEffect, useState } from 'react';
import Title from '../../../Component/Title/Title';
import PopularInstructor from './PopularInstructor';

const PopularSection = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch('Instructors.json')
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
            <div>
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