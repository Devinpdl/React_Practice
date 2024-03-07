import {createContext ,useContext } from "react";

export const ToDoContext  = createContext({
    todos: [
        {
            id:1,
            todo: 'Buy groceries',
            completed: false,
        }
    ],
    addToDo: (todo) => {},
    //Here, addToDo is one functionality of the context .It will be used to add a new todo in the list.
    //What work can be done from this function? We don't know it.. we will know it only after defining
    //the functionality of addToDo inside main.jsx..
    updateToDo: (id, todo) => {},
    //Here, updateToDo demands two  arguments - an id and a updated todo string.
    //It will be used to update any existing todo with its new value.

    removeToDo: (id)=>{},
    toggleComplete: (id) => {},

});

export const usedToDo = () => {
    return useContext(ToDoContext);
}

export const  ToDoProvider= ToDoContext.Provider;

