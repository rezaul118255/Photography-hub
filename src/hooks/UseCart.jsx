import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';

const UseCart = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem('access-token');

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/Carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },

        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

};

export default UseCart;