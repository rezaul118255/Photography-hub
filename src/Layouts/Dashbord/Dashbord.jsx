



import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import UseInstructor from '../../hooks/UseInstructor';

const Dashbord = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    // const isInstructors = false;
    const [isInstructor] = UseInstructor()
    // console.log(isInstructor)

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  bg-[#4a4640] p-4 w-80 h-full bg-base-200 text-base-content">

                        {
                            isAdmin &&

                            <>
                                <li>
                                    <NavLink to="dashboard/manageClass">
                                        Manage Class
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to="dashboard/manageUsers">
                                        Manage Users
                                    </NavLink>

                                </li>


                            </> || isInstructor &&
                            <>
                                <li>
                                    <NavLink to="dashboard/addClass">
                                        Add a  Class
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to="dashboard/myClass">
                                        My Class
                                    </NavLink>

                                </li>


                            </> ||
                            <>
                                <li>
                                    <NavLink to="dashboard/selectedClass">
                                        Selected Class
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to="dashboard/enrollClass">
                                        EnrollClass
                                    </NavLink>

                                </li>



                            </>
                        }


                        {/* Sidebar content here */}


                        <div className="divider"></div>
                        <li><NavLink to="/"> Home</NavLink> </li>
                        <li><NavLink to="/classes"> Class</NavLink></li>
                        <li><NavLink to="/instructors">Instructors</NavLink></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashbord;