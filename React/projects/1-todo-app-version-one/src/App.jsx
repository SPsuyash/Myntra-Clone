import AppName from "./comp/AppName";
import AddTodo from "./comp/AddTodo";
import TodoItem1 from "./comp/TodoItem1";
import TodoItem2 from "./comp/TodoItem2";


function App() {
  return (
    <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
        </div>
      </center>
  );
}

export default App;
