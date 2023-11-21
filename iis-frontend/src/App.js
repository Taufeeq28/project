import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPatient from './pages/SignupPatient';
import SideNavBar from './components/SideNavBar/SideNavBar';
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/sideBar' element={<SideNavBar />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/signupPatient' element={<SignupPatient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
