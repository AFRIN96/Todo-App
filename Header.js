import React from 'react';
import './menubar.css';
const navsRoutes = ["Protected route", "UnProtected route"];
export const Header = () => {
    return (
        <div>
        <ul className="nav-routes">
        {navsRoutes.map((nav)=>(
            <li>{nav}</li>
        ))}
        </ul>
        </div>
    )
}
