import React from 'react'
import {Suspense} from 'react';
import {Navigate,Outlet} from 'react-router-dom';
export default function PrivateRoute() {
    const token=localStorage.getItem("token") // getItem traemos algo y le agregamos nombre guardandola en una constante
    if (!token)
    {
        return<Navigate to={"/"}/>;
    }
  return (
    <>
    <Outlet/>
    </>
  )
}

