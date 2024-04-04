import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

  const [input, setInput] = useState("");
  const dispatch= useDispatch(); //This is the syntax to use the dispatch in redux..
  //Here, we are executing the action using dispatch. 

  const addTodoHandler = (e) =>{
    e.preventDefault();
    //Dispatch does use reducers and make changes the values inside the store.. 
    dispatch(addTodo(input)) //dispatch is our method and we're sending the value from the addTodo reducer
    //to the addTodoHandler method above..
    //Here, we call reducer named addTodo from our slice file with payload as input field data.
    //Also, we've send the value to the addTodo reducer named 'input' to be used in the action creator.
    //Now, the new todo will appear on the screen after submitting this form.
    setInput("") //After adding a todo, clearing out the input box for next addition of todos.

  };

    return (
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    );
};

export default AddTodo;