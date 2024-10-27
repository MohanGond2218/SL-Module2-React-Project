import React from 'react';
import { Link } from 'react-router-dom';


function Home () {
  
    return (<div>
                <h2>Home</h2>
                <p>Welcome to Home Page</p>
                <p>Login page</p>
                <Link to='/login' >Go to Login Page</Link>
            </div>);
}

export default Home;