import { useAppSelector } from '@src/hooks/redux';
import { userApi } from '@src/services/UserService';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ProtectedRouteElement = () => {
  const { loggedIn } = useAppSelector((state) => state.userReducer);

  const { isLoading, isFetching } = userApi.endpoints.getUser.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const userCheck = userApi.endpoints.getUser.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });

  if (loading) {
    return <Spinner />;
  }

  return loggedIn || userCheck ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRouteElement;
