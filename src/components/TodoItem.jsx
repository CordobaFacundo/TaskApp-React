
import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <li className='list-group-item d-flex justify-content-between'>
                <span
                    onClick={() => onToggleTodo(todo.id)}
                    className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}>
                    {todo.description}
                </span>
            
                <span>
                    {todo.done && <span className='text-success'>Completed</span>}
                    <button onClick={() => onToggleTodo(todo.id)} className='btn btn-success'><i className="bi bi-check-square-fill"></i></button>
                    <button onClick={() => onDeleteTodo(todo.id)} className='btn btn-danger'><i className="bi bi-x-square-fill"></i></button>
                </span>

            </li>

        </>
    )
}
