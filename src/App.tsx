import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StudentProfile from './pages/StudentProfile';
import Observations from './pages/Observations';
import Corrections from './pages/Corrections';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 ml-64">
          <Routes>
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/observations" element={<Observations />} />
            <Route path="/corrections" element={<Corrections />} />
            <Route path="/" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;