import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { MainPage } from './components/MainPage';
import { ButtonsDemo } from './demos/ButtonsDemo';
import TextInputDemo from './demos/TextInputDemo';
import { IconsDemo } from './demos/IconsDemo';
import { ColorsDemo } from './demos/ColorsDemo';
import TypographyDemo from './demos/TypographyDemo';
import './styles/global.css';

function AppContent() {
  
  const menuOptions = [
    { 
      value: '/main', 
      label: 'Nexla Design System',
      path: '/main'
    },
    { 
      value: '/typography', 
      label: 'Typography',
      path: '/typography'
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
      value: '/colors', 
      label: 'Colors',
      path: '/colors'
    },
    { 
      value: '/icons', 
      label: 'Icon Gallery',
      path: '/icons'
    },
  ];



  return (
    <div className="app">
      <Sidebar
        options={menuOptions}
      />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/typography" element={<TypographyDemo />} />
          <Route path="/buttons" element={<ButtonsDemo />} />
          <Route path="/inputs" element={<TextInputDemo />} />
          <Route path="/colors" element={<ColorsDemo />} />
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