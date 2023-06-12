import React, { useEffect, useState } from 'react';
import Title from '../../../Component/Title/Title';
import Popular from './Popular';

const Popula = () => {
    // const [Classes, setClasses] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/class')
    //         .then(res => res.json())
    //         .then(data => setClasses(data))
    //     // .then(data => {
    //     //     const popularClass = data.filter(item => item.admitted_students > 15);
    //     //     setClasses(popularClass)
    //     // })


    // }, [])


    const [Classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data
                    .filter(item => item.admitted_students > -1)
                    .sort((a, b) => b.admitted_students - a.admitted_students)
                    .slice(0, 6);
                setClasses(popularClasses);
            });
    }, []);

    return (
        <div>
            <Title subHeading={"Top enrolled class here"}
                heading={"Popular Class "}>

            </Title>

            <div className=' gap-4 grid md:grid-cols-3'>
                {
                    Classes.map(PopularClass => <Popular
                        key={PopularClass.id}
                        PopularClass={PopularClass}
                    ></Popular>)
                }
            </div>



        </div>
    );
};

export default Popula;