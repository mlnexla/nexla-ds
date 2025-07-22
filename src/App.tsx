import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainPage } from './components/MainPage';
import { ButtonsDemo } from './demos/ButtonsDemo';
import TextInputDemo from './demos/TextInputDemo';
import { IconsDemo } from './demos/IconsDemo';
import './styles/global.css';

type DemoType = 'home' | 'buttons' | 'textInput' | 'icons';

function App() {
  const [currentDemo, setCurrentDemo] = useState<DemoType>('home');

  const menuOptions = [
    { 
      value: 'home', 
      label: 'Nexla Design System'
    },
    { 
      value: 'buttons', 
      label: 'Buttons'
    },
    { 
      value: 'textInput', 
      label: 'Text Input'
    },
    { 
      value: 'icons', 
      label: 'Icon Gallery'
    },
  ];

  const renderDemo = () => {
    switch (currentDemo) {
      case 'home':
        return <MainPage />;
      case 'buttons':
        return <ButtonsDemo />;
      case 'textInput':
        return <TextInputDemo />;
      case 'icons':
        return <IconsDemo />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="app">
      <Sidebar
        options={menuOptions}
        value={currentDemo}
        onChange={(value) => setCurrentDemo(value as DemoType)}
      />
      <main className="app-main">
        {renderDemo()}
      </main>
    </div>
  );
}

export default App; 