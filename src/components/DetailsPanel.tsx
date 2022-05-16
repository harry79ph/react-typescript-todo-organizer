import List from './List';
import { Item, Items, StateSetterType } from './models';

interface DetailsPanelProps extends Items {
  setCandos: StateSetterType;
  setTodos: StateSetterType;
  deleteItem: (item: Item) => void;
  onSwitch: (item: Item) => void;
}

const DetailsPanel = ({ candos, todos, setCandos, setTodos, deleteItem, onSwitch }: DetailsPanelProps) => {

  const groups: string[] = ["candos", "todos"];
  
  return (
    <div className="container">
      {groups.map((group, i) => {
        return (
          <div key={'container' + i}>
            <h3>{group}</h3>
            <div className="box">
              <List
                  state={group === 'candos' ? candos : todos}
                  stateSetter={group === 'candos' ? setCandos : setTodos}
                  deleteItem={deleteItem}
                  onSwitch={onSwitch}
                />
            </div>
          </div>);
      })}
    </div>
  );
};

export default DetailsPanel;