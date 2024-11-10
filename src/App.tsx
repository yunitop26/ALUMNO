import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StudentProfile from './pages/StudentProfile';
import Observations from './pages/Observations';
import Corrections from './pages/Corrections';
import Secretary from './pages/Secretary';
import Management from './pages/Management';
import ReviewCoordinator from './pages/ReviewCoordinator';
import ProposalReviewer from './pages/ProposalReviewer';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<Login />} 
        />
        
        <Route
          path="/*"
          element={
            <ProtectedRoutes />
          }
        />
      </Routes>
    </Router>
  );
}

function ProtectedRoutes() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 bg-pastel-blue/10">
        <Routes>
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/corrections" element={<Corrections />} />
          <Route path="/secretary" element={<Secretary />} />
          <Route path="/management" element={<Management />} />
          <Route path="/review-coordinator" element={<ReviewCoordinator />} />
          <Route path="/proposal-reviewer" element={<ProposalReviewer />} />
          <Route path="/" element={<Navigate to="/secretary" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;