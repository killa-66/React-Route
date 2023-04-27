import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routs";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <Routes>
            {isAuth ? (
                <>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={<route.element />}
                            path={route.path}
                        />
                    ))}
                    <Route path="/*" element={<Navigate to="/posts" />} />
                </>
            ) : (
                <>
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={<route.element />}
                            path={route.path}
                        />
                    ))}
                    <Route path="/*" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
};

export default AppRouter;