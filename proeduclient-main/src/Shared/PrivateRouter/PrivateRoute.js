import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className='text-center'><Spinner animation="border" />;</div>
    }
    if(!(user && user.uid)){
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children
};

export default PrivateRoute;