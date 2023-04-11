import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router/routs";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    element={<route.element/>}
                    path={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;