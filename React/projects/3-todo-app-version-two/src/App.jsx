import AppName from "./comp/AppName";
import AddTodo from "./comp/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./comp/TodoItems";

function App() {
  const todoItems = [
    {
      name: "buymilk",
      dueDate: "4/10/2034",
    },
    {
      name: "go to college",
      dueDate: "4/10/2034",
    },
    {
      name: "like this video",
      dueDate: "4/10/2034",
    },
    {
      name:"hello ",
      dueDate:"31/34/12",
    }
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
