import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "todo1",
      checked: false,
    },
    {
      id: 2,
      task: "todo2",
      checked: true,
    },
  ]);

  const [inputTask, setInputTask] = useState("");

  const addTask = () => {
    const newTodo = {
      id: todoList.length + 1,
      task: inputTask,
      checked: false,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setInputTask("");
  };

  const deleteTask = (id) => {
    const deletedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodoList);
  };

  const test = () => {
    axios.get("http://13.125.128.160:8080/").then(function (response) {
      // 성공한 경우 실행
      console.log(response);
    });
  };

  return (
    <div className="App">
      <input type="button" onClick={test} value={"test"}></input>
      <input
        value={inputTask}
        onInput={(e) => setInputTask(e.target.value)}
      ></input>
      <button onClick={addTask}>추가</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {todoList.map((todo) => {
          // return (
          //   <div style={{width: '1000px', display: 'flex'}}>
          //     <input type="checkbox" checked={todo.checked}></input>
          //     <span>{todo.task}</span>
          //     <button onClick={()=>deleteTask(todo.id)}>삭제</button>
          //   </div>
          // )
          return <Todo todo={todo} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
