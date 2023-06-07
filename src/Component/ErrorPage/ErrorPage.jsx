import React from 'react';
import errorImage from '../../assets/undraw_Page_not_found_re_e9o6.png';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div>
            <div>
                <div>
                    <div>
                        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                                <div className='max-w-md text-center'>
                                    <img src={errorImage} alt='Error' className='h-80 w-96' />
                                    {/* <h2 className='mb-8 font-extrabold text-9xl text-blue-500'>
                                    <span className='sr-only'>Error</span>
                                    {status || 404}
                                </h2> */}
                                    <p className='text-2xl font-semibold md:text-3xl text-red-500 mb-8'>
                                        {error?.message}
                                    </p>
                                    <p>Please provide the correct URL link.</p>
                                    <Link to='/' className='btn'>
                                        Back to homepage
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;