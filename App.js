import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import PetDetail from './components/PetDetail';
import CreatePet from './components/CreatePet';
import Pet from './components/Pet'; // Import the generic Pet component
import EditPet from './components/EditPet';
import AdoptPet from './components/AdoptPet';
import { UserContext } from './contexts/UserContext';
import './App.css';

// Import the new components
import Home from './components/Home';
import Feedback from './components/Feedback';
import ContactUs from './components/ContactUs';

const App = () => {
  const { user } = useContext(UserContext);
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <div className="wrapper">
        <h1 className="App-header">Welcome to the Pet Adoption Platform
          {isAuthenticated && user && (
            <div style={{ textAlign: 'right', fontSize: 20, marginLeft: 'auto', marginRight: 0, paddingRight: 10 }}>
              Welcome {user.name}
              <Link to="/logout" className="logout-link">Logout</Link>
            </div>
          )}
        </h1>
        
        {isAuthenticated && user && (
          <nav className="nav-bar">
            <ul>
              <li><Link to="/">Home</Link></li> {/* New Home link */}
              <li><Link to="/pets/Dog">Dogs</Link></li>
              <li><Link to="/pets/Cat">Cats</Link></li>
              <li><Link to="/pets/Bird">Birds</Link></li>
              <li><Link to="/pets/Other">Other Pets</Link></li>
              <li><Link to="/CreatePet">Add a Pet</Link></li>
              <li><Link to="/feedback">Feedback</Link></li> {/* New Feedback link */}
              <li><Link to="/contact-us">Contact Us</Link></li> {/* New Contact Us link */}
            </ul>
          </nav>
        )}
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* New Home route */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pets/:type" element={<Pet />} />
          <Route path="/pets" element={<Pet />} />
          <Route path="/pet/:id" element={<PetDetail />} />
          <Route path="/CreatePet" element={<CreatePet />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/EditPet/:id" element={<EditPet />} />
          <Route path="/AdoptPet/:id" element={<AdoptPet />} />
          <Route path="/feedback" element={<Feedback />} /> {/* New Feedback route */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* New Contact Us route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
