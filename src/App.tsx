import { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import DetailsPanel from './components/DetailsPanel';
import { Item } from './components/models';
import useLocalStorage from "./components/useLocalStorage";

function App() {

  const [candos, setCandos] = useState<Item[]>([]);
  const [todos, setTodos] = useState<Item[]>([]);
  const { retrieveFromLocal } = useLocalStorage();

  useEffect(() => {
    retrieveFromLocal(["cando", "todo"], setCandos, setTodos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNewItem = (className: string, titleValue: string, contentValue: string, isActive: boolean): void => {
    setCandos(prev => [
      ...prev,
      { className, title: titleValue, content: contentValue, isActive }
    ]);
  };

  const deleteItem = (item: Item) => {
    const { className, title } = item;
    let stateSetter = null;
    className.includes('cando') ? (stateSetter = setCandos) : (stateSetter = setTodos);
    stateSetter(prev => prev.filter((item) => item.title !== title));
  };

  const switchItems = (item: Item) => {
    if (item.className.includes('cando')) {
      setTodos(prev => [
        ...prev,
        { className: 'todo', title: item.title, content: item.content, isActive: false }
      ]);
      deleteItem(item);
    } else {
      setNewItem('cando', item.title, item.content, false);
      deleteItem(item);
    }
  };

  return (
    <div className="wrapper">
      <AddItem candos={candos} todos={todos} onUserSubmit={setNewItem} />
      <DetailsPanel
        candos={candos}
        todos={todos}
        setCandos={setCandos}
        setTodos={setTodos}
        deleteItem={deleteItem}
        onSwitch={switchItems}
      />
    </div>
  );
}

export default App;
