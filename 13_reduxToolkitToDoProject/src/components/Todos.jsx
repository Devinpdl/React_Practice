import React, { useState } from 'react'
//1st we do import useSelector and (useDispatch coz there comes a list of todo and when removing it
//..we've to use an action so we've to use dispatch for this.. so we import useDispatch too.. 
import {useDispatch, useSelector} from 'react-redux'
//Also, we've to import the individual reducers called removeTodo also 
import {removeTodo, editTodo, updateTodo } from '../features/todo/todoSlice'

//Now, We've to add functionality to list all the todos.
function Todos() {
  //Now, here we add the functionality to bring the todos from the store..
  //For this we use useSelector
  const todos = useSelector(state => state);
  // Assuming todos is stored in the Redux state
  const dispatch = useDispatch();
//Here, we're adding the functionality of editable..
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEditTodo = (id, text) => {
    setEditableTodoId(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id) => {
    if (editedText.trim() !== "") {
      dispatch(editTodo({ id, newText: editedText.trim() }));
      setEditableTodoId(null);
      setEditedText("");
    }
  };

  const handleToggleComplete = (id, completed) => {
    dispatch(updateTodo({ id, completed: !completed }));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Todos</h2>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editableTodoId === todo.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onBlur={() => handleSaveEdit(todo.id)}
                autoFocus
              />
            ) : (
              <div
                className={todo.completed ? "text-gray-500 line-through" : "text-white"}
                onClick={() => handleToggleComplete(todo.id, todo.completed)}
              >
                {todo.text}
              </div>
            )}

            <div>
              <button
                onClick={() => handleEditTodo(todo.id, todo.text)}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;