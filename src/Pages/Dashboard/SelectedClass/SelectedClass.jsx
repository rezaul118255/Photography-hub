import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../../hooks/UseCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const [cart, refetch] = UseCart();
    // console.log(cart)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/Carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>

            <div className="w-full">
                <Helmet>
                    <title>Photography/Selected Class</title>

                </Helmet>

                <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                    <h3 className="text-3xl">Total Items: {cart.length}</h3>
                    {/* <h3 className="text-3xl">Total Price: ${total}</h3> */}
                    {/* <button className="btn btn-warning btn-sm">PAY</button> */}
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.class_name}
                                    </td>
                                    <td className="text-end">${item.course_fee}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm">PAY</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-gray-500  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SelectedClass;