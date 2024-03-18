import { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="home__navbar">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/projects'}>Projects</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
