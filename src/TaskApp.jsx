import React from 'react'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'
import { TodoAdd } from './components/TodoAdd';

function TaskApp() {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1><i className="bi bi-journal-check"></i>TaskApp</h1>
      <h4>Total tasks {todosCount} <small>, Pending tasks: {pendingTodosCount}</small></h4>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>

        <div className="col-5">
          <h5>Add new tasks</h5>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}

export default TaskApp
