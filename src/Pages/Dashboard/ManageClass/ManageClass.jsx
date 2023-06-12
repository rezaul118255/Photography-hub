import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';


const ManageClass = () => {
    const [Classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())

            .then(data => setClasses(data))
    }, [])
    return (

        <div>
            <div>


                <div className="w-full">
                    <Helmet>
                        <title> Photography ||MangeClass</title>
                    </Helmet>
                    <h3 className="text-3xl font-semibold my-4">Total Class: {Classes.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>image</th>
                                    <th>ClassName</th>

                                    <th>Instructor Name</th>
                                    <th>Instructor email</th>
                                    <th>seats</th>
                                    <th>Price</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Classes.map((Class, index) => <tr key={Class._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={Class.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{Class.class_name}</td>
                                        <td>{Class.instructor_name}</td>
                                        <td>{Class.instructor_email}</td>
                                        <td>{Class.available_seats}</td>
                                        <td>{Class.course_fee}</td>


                                        <td>
                                            <button className="btn btn-ghost bg-green-300  text-white">Approve</button>
                                            <button className="btn btn-ghost bg-red-700  text-white">Deny </button>
                                            <button className="btn btn-ghost bg-blue-500  text-white">feedback</button>
                                        </td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageClass;