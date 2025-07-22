import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { MainPage } from './components/MainPage';
import { ButtonsDemo } from './demos/ButtonsDemo';
import TextInputDemo from './demos/TextInputDemo';
import { IconsDemo } from './demos/IconsDemo';
import './styles/global.css';

function AppContent() {
  const location = useLocation();
  
  const menuOptions = [
    { 
      value: '/main', 
      label: 'Nexla Design System',
      path: '/main'
    },
    { 
      value: '/buttons', 
      label: 'Buttons',
      path: '/buttons'
    },
    { 
      value: '/inputs', 
      label: 'Text Input',
      path: '/inputs'
    },
    { 
      value: '/icons', 
      label: 'Icon Gallery',
      path: '/icons'
    },
  ];

  // Get the current active route
  const currentPath = location.pathname;

  return (
    <div className="app">
      <Sidebar
        options={menuOptions}
        value={currentPath}
        onChange={(path) => {
          // Navigation will be handled by React Router Link components in Sidebar
        }}
      />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/buttons" element={<ButtonsDemo />} />
          <Route path="/inputs" element={<TextInputDemo />} />
          <Route path="/icons" element={<IconsDemo />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 