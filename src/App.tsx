import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import DetailsPanel from './components/DetailsPanel';

interface Item {
  className: string;
  title: string;
  content: string;
  isActive: boolean;
}

function App() {

  const [candos, setCandos] = useState<Item[]>([]);
  const [todos, setTodos] = useState<Item[]>([]);

  const setNewItem = (className: string, titleValue: string, contentValue: string, isActive: boolean): void => {
    setCandos(prev => [
      ...prev,
      { className, title: titleValue, content: contentValue, isActive }
    ]);
  };

  return (
    <div className="wrapper">
      <AddItem onUserSubmit={setNewItem} />
      <DetailsPanel />
    </div>
  );
}

export default App;
