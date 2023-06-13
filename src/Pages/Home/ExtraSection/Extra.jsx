import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './extra.css';
import CountUp from 'react-countup';
import useAuth from '../../../hooks/useAuth';

const Extra = () => {
    const [counter, setCounter] = useState();
    const [Classes, setClasses] = useState([]);
    const [users, setusers] = useState([]);
    const [instructor, setInstructor] = useState([]);
    // const { user } = useAuth();
    useEffect(() => {
        fetch('https://assignment-12-server-pi-pearl.vercel.app/class')
            .then(res => res.json())

            .then(data => setClasses(data))
    }, [])
    useEffect(() => {
        fetch('https://assignment-12-server-pi-pearl.vercel.app/users')
            .then(res => res.json())

            .then(data => setusers(data))
    }, [])
    useEffect(() => {
        fetch('https://assignment-12-server-pi-pearl.vercel.app/Instructors')
            .then(res => res.json())

            .then(data => setInstructor(data))
    }, [])

    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            <div className="style mt-16">
                {counter && (
                    <div className="countup-container">
                        <div className="countup-item" style={{ background: '#F2C94C' }}>

                            <h3 className='text-2xl'>Total Class:</h3>
                            <CountUp start={0} end={Classes.length} duration={4} delay={0} className="countup" />
                        </div>
                        <div className="countup-item" style={{ background: '#56CCF2' }}>
                            <h3 className='text-2xl'>Total Instructor</h3>
                            <CountUp start={0} end={instructor.length} duration={4} delay={0} className="countup" />
                        </div>
                        <div className="countup-item" style={{ background: '#6FCF97' }}>
                            <h3 className='text-2xl'>
                                total User
                            </h3>
                            <CountUp start={0} end={users.length} duration={7} delay={0} className="countup" />
                        </div>
                    </div>
                )}
                +
            </div>
        </ScrollTrigger>
    );
};

export default Extra;

