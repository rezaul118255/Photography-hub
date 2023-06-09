// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';

// const Dashbord = () => {
//     return (
//         <div>
//             <div className="drawer drawer-mobile">
//                 <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                 {/* <Outlet></Outlet> */}
//                 <div className="drawer-content flex flex-col items-center justify-center">
//                     <Outlet></Outlet>
//                     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  ">Open drawer</label>

//                 </div>
//                 <div className="drawer-side bg-[#3d362b]">
//                     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                     <ul className="menu p-4 w-80">

//                         <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
//                         <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
//                         <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
//                         <li>
//                             <NavLink to="dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart
//                                 {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
//                             </NavLink>

//                         </li>
//                         <div className="divider"></div>
//                         <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
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

const Dashbord = () => {
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
                        {/* Sidebar content here */}

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

                        <li>
                            <NavLink to="dashboard/myCart"> My Cart

                            </NavLink>

                        </li>
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