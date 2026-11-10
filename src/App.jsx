import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
 return (
 <center className="todo-container">

  <AppName />
  <AddTodo />
  <div className="items-container">
    <TodoItem todoDate={} todoName={}/>
    <TodoItem1 />
  <TodoItem2 />
  </div>

 </center>
 );
}
export default App;
