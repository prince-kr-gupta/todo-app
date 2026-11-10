import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
   const todoItems = [{
        name: 'Buy Milk',
        dueDate: '10/11/2026',
    },
    {
        name: 'Go To College',
        dueDate: '10/11/2026',
    },
];
 return (
 <center className="todo-container">

  <AppName />
  <AddTodo />
  <div className="items-container">
    <TodoItem todoDate={} todoName={}/>
  </div>

 </center>
 );
}
export default App;
