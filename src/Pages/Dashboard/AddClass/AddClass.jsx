import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { class_name, instructor_name, instructor_email, available_seats, course_fee, admitted_students } = data;
                    const newItem = { class_name, instructor_name, instructor_email, available_seats, price: parseFloat(course_fee), admitted_students, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/Class', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };
    return (
        <div>
            <div className="w-full px-10">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">class_name*</span>
                        </label>
                        <input type="text" placeholder="class_name"
                            {...register("class_name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className='flex gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">instructor_name</span>
                            </label>
                            <textarea {...register("instructor_name", { required: true })} className="textarea textarea-bordered " placeholder="type yor name"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">instructor_email</span>
                            </label>
                            <textarea {...register("instructor_email", { required: true })} className="textarea textarea-bordered " placeholder="type yor email"></textarea>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">admitted_students</span>
                        </label>
                        <textarea {...register("admitted_students", { required: true })} className="textarea textarea-bordered " placeholder="admitted_students"></textarea>
                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">available_seats</span>
                            </label>
                            <textarea {...register("available_seats", { required: true })} className="textarea textarea-bordered " placeholder="available_seats"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">course_fee</span>
                            </label>
                            <textarea {...register("course_fee", { required: true })} className="textarea textarea-bordered " placeholder="course_fee"></textarea>
                        </div>
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Item Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;