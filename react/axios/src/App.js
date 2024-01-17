import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ApiRequest from './ApiRequest';
import Contact from './Contact.js';
import NoMatch from './NoMatch.js';
import NavLink from './NavLink.js';
import User from './User.js';
import CrudOperations from './CrudOperations.js';
import './styles.css';

const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" label="Home" />
            </li>
            <li>
              <NavLink to="/about" label="About" />
            </li>
            <li>
              <NavLink to="/api" label="Api Request" />
            </li>
            <li>
              <NavLink to="/contact" label="Contact" />
            </li>
            <li>
              <NavLink to="/user/john" label="User (John)" />
            </li>
            <li>
              <NavLink to="/lazy" label="Lazy Loaded" />
            </li>
            <li>
              <NavLink to="/crud" label="CRUD Operations" />
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<ApiRequest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username" element={<User />} />
          <Route
            path="/lazy"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedComponent />
              </Suspense>
            }
          />
          <Route path="/crud" element={<CrudOperations />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
