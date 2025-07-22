import { useState } from 'react';
import { JumpMenu } from './components/JumpMenu';
import { ButtonsDemo } from './demos/ButtonsDemo';
import TextInputDemo from './demos/TextInputDemo';
import { IconsDemo } from './demos/IconsDemo';
import './styles/global.css';

type DemoType = 'buttons' | 'textInput' | 'icons';

function App() {
  const [currentDemo, setCurrentDemo] = useState<DemoType>('icons');

  const menuOptions = [
    { value: 'buttons', label: 'Buttons' },
    { value: 'textInput', label: 'Text Input' },
    { value: 'icons', label: 'Icon Gallery' },
  ];

  const renderDemo = () => {
    switch (currentDemo) {
      case 'buttons':
        return <ButtonsDemo />;
      case 'textInput':
        return <TextInputDemo />;
      case 'icons':
        return <IconsDemo />;
      default:
        return <IconsDemo />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-content">
          <h1>Component Library</h1>
          <JumpMenu
            options={menuOptions}
            value={currentDemo}
            onChange={(value) => setCurrentDemo(value as DemoType)}
            placeholder="Select a demo..."
          />
        </div>
      </header>
      <main className="app-main">
        {renderDemo()}
      </main>
    </div>
  );
}

export default App; 