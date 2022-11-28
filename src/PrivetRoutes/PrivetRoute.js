import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';


const PrivetRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <div className="flex items-center justify-center space-x-1 ">
            <progress className="progress h-1 progress-secondary"></progress>
        </div>
    }
    if (user && user?.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivetRoute;