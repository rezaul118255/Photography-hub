





import { getAuth, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.Config';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);



    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };










    const { user } = useContext(AuthContext);
    const auth = getAuth(app);
    const userr = auth.currentUser;
    const handelLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                // setUser(null)
            })
            .catch(error => console.log(error))
    };

    const location = useLocation();

    const isActiveRoute = (path) => {
        return location.pathname === path ? "active" : "";
    };

    const navOptions = (
        <>
            <li className={isActiveRoute("/")}>
                <Link to="/">Home</Link>
            </li>
            <li className={isActiveRoute("/instructors")}>
                <Link to="/instructors">Instructors</Link>
            </li>
            <li className={isActiveRoute("/classes")}>
                <Link to="/classes">Classes</Link>
            </li>
            {user && (
                <li className={isActiveRoute("/dashboard")}>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            )}
        </>
    );

    return (
        <>
            <div className="navbar color  z-10 bg-opacity-30 max-w-screen-lg bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact z-50 text-black  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>

                    </div>

                    <a className="btn btn-ghost normal-case text-2xl">
                        <span className="text-blue-700 font-bold">Photography</span>{" "}
                        <span className="text-amber-500	">hub</span>{" "}
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                    <ul>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === 'light' ? <FaMoon /> : <LuSun />}
                        </button>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {user && (
                        <div className="tooltip" data-tip={userr.displayName}>
                            {userr && <img className="photo" src={userr.photoURL} alt="" />}
                        </div>
                    )}
                    {user ? (
                        <button onClick={handelLogOut} variant="primary">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button>
                                <Link className="" to="/login">
                                    login
                                </Link>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;




