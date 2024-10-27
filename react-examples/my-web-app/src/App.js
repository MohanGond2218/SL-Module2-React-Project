import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import AboutOurHistory from './components/AboutOurHistory';
import AboutOurTeam from './components/AboutOurTeam';
import AboutTeamMember from './components/AboutTeamMember';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    setIsAuthenticated(true);
    alert("Logeed!!");
    console.log('LoggedIn!');
    setIsAuthenticated(false);
  }
  const logout = () => {
    setIsAuthenticated(false);
    alert("Logeed Out!!");
    console.log("LoggedOut!");
  }
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>   
                </ul>
            </nav>
            
            {/* Define the Routes*/}
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} >
                    <Route path='team' element={<AboutOurTeam />}>
                        {/* <Route path=':id' element={<AboutTeamMember />} /> */}
                    </Route>
                    <Route path='history' element={<AboutOurHistory />} />
                    <Route path='team/:id' element={<AboutTeamMember />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login login={login}/>} />
                <Route path='/dashboard' element={
                <ProtectedRoute isAuthenticated={isAuthenticated} children={<Dashboard logout={logout} />} />}
                />
                {/* <Route path='/dashboard' element={isAuthenticated ? <Dashboard logout={logout}/> : <Login login={login}/>} /> */}
            </Routes>
        </div>
    </Router>
  );
}

export default App;
