// import React from 'react';

// const Footer = () => {
//     return (
//         <div className='mt-12'>
//             <footer className="footer p-10 bg-base-200 text-base-content">
//                 <div>
//                     <span className="footer-title">Services</span>
//                     <a className="link link-hover">Branding</a>
//                     <a className="link link-hover">Design</a>
//                     <a className="link link-hover">Marketing</a>
//                     <a className="link link-hover">Advertisement</a>
//                 </div>
//                 <div>
//                     <span className="footer-title">Company</span>
//                     <a className="link link-hover">About us</a>
//                     <a className="link link-hover">Contact</a>
//                     <a className="link link-hover">Jobs</a>
//                     <a className="link link-hover">Press kit</a>
//                 </div>
//                 <div>
//                     <span className="footer-title">Legal</span>
//                     <a className="link link-hover">Terms of use</a>
//                     <a className="link link-hover">Privacy policy</a>
//                     <a className="link link-hover">Cookie policy</a>
//                 </div>
//             </footer>
//             <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
//                 <div className="items-center grid-flow-col">
//                     {/* <img className='h-24 w-32 rounded-2xl' src={image} alt="" />
//                     <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p> */}
//                 </div>
//                 <div className="md:place-self-center md:justify-self-end">
//                     <div className="grid grid-flow-col gap-4">
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//                     </div>
//                 </div>


//             </footer>
//             <footer>

//             </footer>

//         </div>
//     );
// };

// export default Footer;




import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Services</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-400">Class</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Instractor</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">User</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Student</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-400">About us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Jobs</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Press kit</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Legal</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-gray-400">Terms of use</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Privacy policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">Cookie policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-600" />
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-center ms-12">
                            © 2023 Your Company. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

