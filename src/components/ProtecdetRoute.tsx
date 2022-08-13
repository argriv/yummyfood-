import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ProtecdetRoute: React.FC = () => {

    const { IsAuth } = useTypedSelector(state => state.auth)

    return IsAuth ? <Outlet/> : <Navigate to="/"/>;

}

export default ProtecdetRoute;