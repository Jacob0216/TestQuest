import React, { useState } from "react";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import TesterDashboard from "./TesterDashboard.jsx";
import Post from "./Post.jsx";
import Profile from "./Profile.jsx";
import TesterProfile from "./TesterProfile.jsx";
import BugReport from "./BugReport.jsx";
import Logs from "./Logs.jsx";
import './index.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleLoginAsTester = () => {
    setCurrentScreen('testerDashboard');
  };

  const handleLoginAsDeveloper = () => {
    setCurrentScreen('dashboard');
  };

  const handlePostProject = () => {
    setCurrentScreen('post');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const handleProfile = () => {
    setCurrentScreen('profile');
  };

  const handleLogout = () => {
  setCurrentScreen('login');
};

  const handleProjectClick = (projectId) => {
  setCurrentScreen('bugReport');
};

  const handleCategorize = () => {
    // Handle categorize button click
    console.log('Categorize clicked');
    // setCurrentScreen('categorize'); // When you create this screen
};

  const handleLogs = () => {
  setCurrentScreen('logs');
};

  if (currentScreen === 'login') {
    return <Login onLoginAsTester={handleLoginAsTester} onLoginAsDeveloper={handleLoginAsDeveloper} />;
  }

  if (currentScreen === 'testerDashboard') {
  return <TesterDashboard 
    onProjectClick={handleProjectClick} 
    onCategorize={handleCategorize}
    onProfile={() => setCurrentScreen('testerProfile')}
  />;
}

  if (currentScreen === 'post') {
    return <Post onBack={handleBackToDashboard} />;
  }

  if (currentScreen === 'profile') {
  return <Profile onBack={() => setCurrentScreen('dashboard')} onLogout={handleLogout} />;
}

  if (currentScreen === 'testerProfile') {
  return <TesterProfile onBack={() => setCurrentScreen('testerDashboard')} onLogout={handleLogout} />;
}

  if (currentScreen === 'bugReport') {
  return <BugReport onBack={() => setCurrentScreen('testerDashboard')} />;
} 

if (currentScreen === 'logs') {
  return <Logs onBack={() => setCurrentScreen('dashboard')} />;
}

  return <Dashboard onPostProject={handlePostProject} onProfile={handleProfile} onLogs={handleLogs} />;
}

export default App;