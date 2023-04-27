import React, {useContext} from 'react';
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick={() => setIsAuth(false)} >
                Logout
            </MyButton>
            <div className="navbar__links">
                <a href="/about">О сайте</a>
                <a href="/posts">Посты</a>
            </div>
        </div>
    );
};

export default Navbar;