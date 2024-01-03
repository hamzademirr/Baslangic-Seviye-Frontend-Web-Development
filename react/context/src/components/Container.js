import '../App.css'
import React from 'react'
import Button from './Button';
import Header from './Header';
import Profile from './Profile';

import { useTheme } from '../context/ThemeContext';
// import { useContext } from 'react'
// import ThemeContext from "../context/ThemeContext"; ilgili bolumde yapilan kisaltma sayesinde kullanim sadelesti.

function Container() {
    // const data = useContext(ThemeContext);
    const { theme } = useTheme();
    return (
        <div className={`App ${theme}`}>
            <Header />
            <hr />
            <Button />
            <hr />
            <Profile />
        </div>
    )
}

export default Container