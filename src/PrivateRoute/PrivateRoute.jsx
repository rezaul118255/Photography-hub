import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;

};

export default PrivateRoute;