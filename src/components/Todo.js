import React from 'react'

function Todo({todo, deleteTask}) {
  return (
    <div style={{width: '1000px', display: 'flex'}}>
                <input type="checkbox" checked={todo.checked}></input>
                <span>{todo.task}</span>
                <button onClick={()=>deleteTask(todo.id)}>삭제</button>
    </div>
  )
}

export default Todo