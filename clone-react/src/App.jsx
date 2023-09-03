import { useState } from 'react';
import './App.css'
import NavBar from '../compononets/navbar/Navbar'
import Header from '../compononets/header/Header'
import Section from '../compononets/section/Section';




function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? 'dark-background' : ''}>
      <NavBar isActive={isActive} onToggle={setIsActive} />
      <Header isActive={isActive} />
      <Section isActive={isActive} />
    </div>
  );
}

export default App;
