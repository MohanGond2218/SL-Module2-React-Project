import React from 'react';
import {Link, Outlet} from 'react-router-dom';

function AboutOurTeam () {
    return (
            <div>
                <h2>About Our Team</h2>
                <p>Welcome to About Our Team Page</p>
                <p>Meet Our Team Member</p>
                <ul>
                    <li>
                        <Link to='/about/team/1'>Team Member 1</Link>
                    </li>
                    <li>
                        <Link to='/about/team/2'>Team Member 2</Link>
                    </li>
                    <li>
                        <Link to='/about/team/3'>Team Member 3</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
            );
}

export default AboutOurTeam;