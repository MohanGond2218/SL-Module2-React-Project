import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard (props) {
    const navigate = useNavigate();

    const handleLogout = () => {
        props.logout();
        navigate('/login');
    }

    return (
        <div>
            <h3>Dashboard Page</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}