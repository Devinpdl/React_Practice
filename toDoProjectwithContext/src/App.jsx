import { useState, useEffect } from 'react'
import { ToDoProvider } from './contexts';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';
import './App.css'

function App() {
 const [todos, setTodos] = useState([]);
 //We used empty array in useState cuz if we used loop then we can find if there's any value or not..

 //Now, we add and define functionality to our app...

 //First, we need Todoprovider which will provide the state of todos..(It's taken from contexts)
 //This is just done inside the return statement of JSX..

 //Now, we define functionality of the methods that we define inside provider where we're returning methods
 //and values..

 const addToDo = (todo) => {
    //Now, this individual todo item will be added into the list of all todos which is empty array
    //in the useState above at first.
    //If there's already an existing value then we've to preserve that value.. so use call back function here..
    // setTodos ((prev)=> {return[...prev, todo]} ); 
    //Since todo is an object which has diffn properties and we can't give it as string.. so,

    setTodos ((oldtoDos)=> [...oldtoDos, {id: Date.now(), ...todo} ] ) ;//Spread operator helps us to copy old
    //Here, Date.now() will assign current time to each todo when ever new todo is created..
    //At the last, we've extracted and copied the old value of todo using spread ... operator at last..

 }

 const updateToDo = (id, todo) =>{
    //To upadate our todo we have to pass two parameters one for id and another for updated todo..
    //Now to update which id we'll take old values and replace with new ones..
    setTodos((oldtoDos)=> oldtoDos.map((oldtoDos)=>(oldtoDos.id === id ? todo : oldtoDos)))
    //first we're calling setTodos function which is a function given by useState hook..
    //Then, we took the callback function of map method..
    //which returns new array after mapping through every element..
    //Then map function is called on todos which are returned by useState hook..
    //Inside map function, we've  checked if the id of the todo is same as the id we passed in params..
    //If yes, then we'll change the value of that particular todo to whatever we passed in params..
    //Here, oldtoDos.id is of old items and todo.id is of new items..
    //Here, .map(oldtoDos) is every single item of todos..
 }
 const removeToDo= (id) =>{
    setTodos((oldToDos)=>{
        return oldToDos.filter((val)=> val.id !== id)
        //Here, all values does passes thru filter function but those whose ids matches with the param id 
        //are removed..So, only remaining are left..
        //or, it can be said we're removing one value and filtering out those
        //who don't have the property 'id' equal to what we passed in params.
        //Here, you can write todo instead of val.
    })
        }
    //Now, to check and uncheck the todo list...
    const toggleComplete = (id) =>{
        setTodos((prev)=>{
     return prev.map((oldToDos)=> oldToDos.id === id ? {...oldToDos, completed: !oldToDos.completed} : oldToDos)
        //Here, if the oldToDos matches with the id we passed in params, then we'll make
        //completed property true or false based upon its previous state..
        //We used spread operator to copy the values of other props of that todo..
        //This way, we won't lose any data of that todo.. and finally we reverse the value of completed..
        //In the property of todos... in ToDoContext.js
        })
    }
    //Here, the basic context's functionality do finishes..
    //Now, we add the rest functionality of local storage..
    //But while using localstorage.setItem or getItem the values once u put is always in string format so, you've to
    //convert it into json format if you want to use the data in future...

    //Now, once an app starts running..it will call useEffect() hook automatically..
    //This useEffects() can query to get all the values from local storage.. For this you've to create
    //function or one method to extract the values from local storage..
    //and assign them to the todos using setTodos()..

    useEffect(() => {
    const todos= JSON.parse(localStorage.getItem('todos'))
    if(todos && Array.isArray(todos) && todos.length > 0)
    setTodos(todos);
    }, [])
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
      //Here, we're giving key first i.e; todos and then we set the value in JSON format
      //while most of time it's given in string format..
    }, [todos])
    
  return (
   <ToDoProvider value={{todos, addToDo, removeToDo, updateToDo, toggleComplete }}>
    {/* //Todoprovider is a provider that provides the data/state to all its child components..
    //TodoProvider returns some values where todos is the property which returns some value,
    and other addToDo , deleteToDo all are the methods that ToDoProvider has provided for us to use it.. */}
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                       {/* //Here, you've to loop the todos that you've bought from the contexts..
                       //And also inside loop we do pass prop for TodoItem */}
                       {todos.map((todo)=>(
                            <div key={todo.id}
                            className="w-full"
                            >
                                <ToDoItem todo={todo}/>
                            </div>
                       ))}
                    </div>
                </div>
            </div>
   </ToDoProvider>
  )
}

export default App
