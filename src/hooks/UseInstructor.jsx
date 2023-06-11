import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/Instructor/${user?.email}`);
            console.log('is Instructor response', res)
            return res.data.Instructor;
        }
    })
    return [isInstructor, isInstructorLoading]

};

export default UseInstructor;