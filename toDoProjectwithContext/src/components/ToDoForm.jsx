import React from 'react'
import { useState } from 'react';
import { usedToDo } from '../contexts';

function ToDoForm() {
    const [todo, setToDo] = useState('');

    const {addToDo} = usedToDo()
    //Here, we're extracting the functionality of usedToDo context to add a new todo.

    const add = (e) => {
    e.preventDefault()
    if(!todo) return; 
    //If there is nothing in the input field, do not proceed with adding an empty string as a task.
    // addToDo(todo);
    //This way is wrong where in the addToDo method in App.jsx we've passed an object in an array..
    //So, Do this way as like below;
    addToDo({id: Date.now(), todo: todo, completed: false})
    //Now, call setToDo...
    setToDo("");

    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> setToDo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default ToDoForm;