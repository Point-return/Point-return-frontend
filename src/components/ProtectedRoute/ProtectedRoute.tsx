import { useAppSelector } from '@src/hooks/redux';
import { useGetUserQuery } from '@src/services/UserService';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ProtectedRouteElement = () => {
  const { loggedIn } = useAppSelector((state) => state.userReducer);

  const { data, isLoading } = useGetUserQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return loggedIn || data ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouteElement;
