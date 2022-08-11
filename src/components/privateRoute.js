import { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const PrivateRoute = ({children}) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return children
}

export default PrivateRoute;
