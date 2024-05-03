//First, we've to createSlice and import it from reduxjs/toolkit
import { createSlice, nanoid } from "@reduxjs/toolkit";
//Also, here we import nanoid too because we need unique id for each todo item.

const initialState= [
    {
        id: nanoid(),
        text: "Go to the gym",
        completed: false,
      }
    ];

export const todoSlice =createSlice({
    name:'todos', // Corrected name from 'todo' to 'todos'
    //Here, Slice do have names pacing feature which means our reducer will be named as addTodo , removeTodo etc 
    initialState,
    //Here, every Slice do have initial State so we declare it...
    //Now, we can use Reducers in this slice.For this purpose we've created folder called store
    //And inside of it we created store.js...
    //Neglect reducers:{} part below.. And just adding comment to make some understanding here..
    //Here, we've given name: todo to our reducer function which will be used to add new todo into state.
    //And our initial state name is todos so by naming todo we can access todos initial state..
    //Saying this for Todos.jsx where we're using const todos = useSelector((state)=> {state.todos})
    reducers:{
        //Here, reducers is an object where we put values in key-value-function pairs format.
        addTodo:(state, action)=> {
            //Inside state we can find updated state value in the store and inside action we can find
            //action.payload and many more
            //Here, we've to bring our data(todo) into state using payload..
            //So, we are sending our new Todo Item as Payload..
            const newTodo ={
                id: nanoid(),
                text: action.payload ,
                //Here, we're accessing the text value from Action.Payload which can access
                //the reducers.
                //Also, payload is an object... you can access any thing using dot notation..
                //Like; payload.text, payload.id, payload.completed,  etc.
                completed:false,
            };
            //Now, to update the state in the Redux..
            state.push(newTodo);
        },
        //Our method always takes two parameters- state(current state) and action (what happened)...
        removeTodo:(state, action)=> {
            //To remove the list, it has to send the id  of that particular element through action.payload..
            //We will filter out all the elements whose ids does not match with the given id..
            //Then, we assign only those filtered elements back to our todos..
            const todoIdToRemove = action.payload;
            return state.filter(todo => todo.id !== todoIdToRemove);
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToEdit = state.find(todo => todo.id === id);
            if (todoToEdit) {
              todoToEdit.text = newText;
            }
          },
          updateTodo: (state, action) => {
            const { id, completed } = action.payload;
            const todoToUpdate = state.find(todo => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.completed = completed;
            }
          },
    }
    //Inside of reducers, it takes property and its corresponding callback function as values.
});
//Here, we've exported todoSlice but actually we do export it in another way..

export const {removeTodo, editTodo, addTodo, updateTodo }= todoSlice.actions;
//Here, todoSlice.actions means exporting all the actions inside the reducers object above including all addTodo
//.. removeTodo, editTodo, updateTodo etc..
//Here, we've extracted two functions; addTodo and removeTodo from todoSlice.actions..
//These two functions are now accessible anywhere else in our application where we import this file..
//Also, we've to export individual reducers like removeTodo or anything you define..

export default todoSlice.reducer;
//This is how we export our reducer, store.js needs awareness about what kind of reducer we have..
//..so, we export it. Here, todoSlice is a slice of Redux.. It contains actions and reducers..