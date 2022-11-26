import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner className='w-full m-auto'
        aria-label="Extra large spinner example"
        size="xl"
      />
    }
    if (user) {
        return children;
    }
    return  <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;