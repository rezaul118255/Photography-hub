import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Class from './Class';

const Classes = () => {
    const [Classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            // .then(data => {
            //     const popularClass = data.filter(item => item.admitted_students > 15);
            //     setClasses(popularClass)
            // })
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Photography/Class</title>

            </Helmet>
            <div className='mt-5 gap-4 grid md:grid-cols-3'>
                {
                    Classes.map(PopularClass => <Class
                        key={PopularClass.id}
                        PopularClass={PopularClass}
                    ></Class>)

                }
            </div>

        </div>
    );
};

export default Classes;