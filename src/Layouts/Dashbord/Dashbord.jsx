



// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import useAdmin from '../../hooks/useAdmin';
// import UseInstructor from '../../hooks/UseInstructor';
// import { Helmet } from 'react-helmet-async';

// const Dashbord = () => {
//     // const isAdmin = true;
//     const [isAdmin] = useAdmin()
//     // const isInstructors = false;
//     const [isInstructor] = UseInstructor()
//     // console.log(isInstructor)

//     return (
//         <div>
//             <Helmet>
//                 <title>Photography/Dashboard</title>

//             </Helmet>
//             <div className="drawer lg:drawer-open">
//                 <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content flex flex-col items-center justify-center">
//                     {/* Page content here */}
//                     <Outlet></Outlet>
//                     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//                 </div>
//                 <div className="drawer-side ">
//                     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                     <ul className="menu  bg-[#645c50] p-4 w-80 h-full bg-base-200 text-base-content">

//                         {
//                             isAdmin &&

//                             <>
//                                 <li>
//                                     <NavLink to="dashboard/manageClass">
//                                         Manage Class
//                                     </NavLink>

//                                 </li>
//                                 <li>
//                                     <NavLink to="dashboard/manageUsers">
//                                         Manage Users
//                                     </NavLink>

//                                 </li>


//                             </> || isInstructor &&
//                             <>
//                                 <li>
//                                     <NavLink to="dashboard/addClass">
//                                         Add a  Class
//                                     </NavLink>

//                                 </li>
//                                 <li>
//                                     <NavLink to="dashboard/myClass">
//                                         My Class
//                                     </NavLink>

//                                 </li>


//                             </> ||
//                             <>
//                                 <li>
//                                     <NavLink to="dashboard/selectedClass">
//                                         Selected Class
//                                     </NavLink>

//                                 </li>
//                                 <li>
//                                     <NavLink to="dashboard/enrollClass">
//                                         EnrollClass
//                                     </NavLink>

//                                 </li>



//                             </>
//                         }


//                         {/* Sidebar content here */}


//                         <div className="divider"></div>
//                         <li><NavLink to="/"> Home</NavLink> </li>
//                         <li><NavLink to="/classes"> Class</NavLink></li>
//                         <li><NavLink to="/instructors">Instructors</NavLink></li>

//                     </ul>

//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Dashbord;





import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAdmin from '../../hooks/useAdmin';
import UseInstructor from '../../hooks/UseInstructor';
import { Helmet } from 'react-helmet-async';
import { AiFillHome, AiOutlineUnorderedList, AiOutlineUser, AiOutlinePlus } from 'react-icons/ai';

const Dashbord = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = UseInstructor();

    const menuVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div>
            <Helmet>
                <title>Photography/Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu bg-[#645c50] p-4 w-80 h-full bg-base-200 text-base-content">
                        {isAdmin && (
                            <>
                                <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                                    <NavLink to="dashboard/manageClass">
                                        <AiOutlineUnorderedList className="mr-2" />
                                        Manage Class
                                    </NavLink>
                                </motion.li>
                                <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                                    <NavLink to="dashboard/manageUsers">
                                        <AiOutlineUser className="mr-2" />
                                        Manage Users
                                    </NavLink>
                                </motion.li>
                            </>
                        )}
                        {isInstructor && (
                            <>
                                <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                                    <NavLink to="dashboard/addClass">
                                        <AiOutlinePlus className="mr-2" />
                                        Add a Class
                                    </NavLink>
                                </motion.li>
                                <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                                    <NavLink to="dashboard/myClass">
                                        <AiOutlineUnorderedList className="mr-2" />
                                        My Class
                                    </NavLink>
                                </motion.li>
                            </>
                        )}
                        {!isAdmin && !isInstructor && (
                            <>
                                <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                                    <NavLink to="dashboard/selectedClass">
                                        <AiOutlineUnorderedList className="mr-2" />
                                        Selected Class
                                    </NavLink>
                                </motion.li>
                                <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                                    <NavLink to="dashboard/enrollClass">
                                        <AiOutlineUser className="mr-2" />
                                        Enroll Class
                                    </NavLink>
                                </motion.li>
                            </>
                        )}

                        <div className="divider"></div>
                        <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                            <NavLink to="/">
                                <AiFillHome className="mr-2" />
                                Home
                            </NavLink>
                        </motion.li>
                        <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                            <NavLink to="/classes">
                                <AiOutlineUnorderedList className="mr-2" />
                                Class
                            </NavLink>
                        </motion.li>
                        <motion.li variants={menuVariants} whileHover={{ scale: 1.05 }}>
                            <NavLink to="/instructors">
                                <AiOutlineUser className="mr-2" />
                                Instructors
                            </NavLink>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;
