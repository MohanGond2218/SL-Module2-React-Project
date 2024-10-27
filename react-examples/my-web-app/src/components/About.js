import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 



function About () {
    return (
            <div>
                <h2>About</h2>
                <p>Welcome to About Page</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="team" >Our Team</Link>
                        </li>
                        <li>
                            <Link to="history" >Our History</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
            );
}

export default About;