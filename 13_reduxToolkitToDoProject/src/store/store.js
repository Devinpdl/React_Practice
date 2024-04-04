// //To use Redux you must create folder called store and name the file store.js... 
// //Redux Toolkit includes these APIs and must import it:
// // - configureStore (low-level)
// import { configureStore } from '@reduxjs/toolkit';

// //Now, we've to use Reducer
// //We can either write a function or an object
// //In this case, I will use an Object of functions because there are many reducers in one place
// export const counterReducer = {
//     //The state that our reducer returns if no matching action is found
//     //This property is mandatory for every reducer
//     //It should always return an object
//     //If not provided, default value would be undefined
//     //So, it’s good practice to provide initialState
//     //Initial State is also known as Default State
//     //Whenever application starts up, it will start with this state
//     //And whenever any action is dispatched which isn’t handled by our reducer, this state will be returned back
//     //And whenever any action is dispatched which doesn't have a corresponding reducer,
//     //That action will simply be ignored by the Redux Store
//     //So, providing Initial State helps us handle such situations gracefully
//     0: (state = { count: 0 }) => state,

//     //Each key in the reducer object represents a slice / part of the Redux Store
//     //Value associated with each key is a Function called as a Reducer 
//     //A Reducer takes two parameters:
//     /*
//         The current state of that slice of the Store
//             It will be undefined at the beginning of the application startup
//                 Because no previous state exists yet
        
//         An Action being dispatched
//             This could be anything
            
//             Actions are plain JavaScript objects that contain a type property
//                     Type tells Redux what kind of Action is happening
//                     Types should be unique across all actions in your app
//                     They don’t have to be strings but they usually are
//                     You can use numbers too
//                     But using string is recommended
//                     So, keep them short and descriptive
// */
//     1: (state, action) => { 
//         switch(action.type){ 
//             case 'INCREMENT':  
//                 return {count: state.count + 1}  
//             case 'DECREMENT':  
//                 return {count: state.count  - 1}    
//             case 'SET_TO':          
//                 return {count: action.value }
//                 default:              
//                     return state;               
//         }
//         },
//     }
        

// export const store = configureStore({})
// //Here must of the cases configureStore takes an object with reducers, middleware or enhancers as a parameter.

//To use Redux you must create folder called store and name the file store.js... 
//Redux Toolkit includes these APIs and must import it:
// - configureStore (low-level)
import { configureStore } from '@reduxjs/toolkit';

// - reducer (middleware)
// import counterReducer from './counterSlice'
//In Redux, we call reducer functions "slice reducers" because each part of our data model
//gets its own reducer function.

//Lets import everything we've defined in todoSlice.js
//Means, store.js need access to todoReducer so we import it..
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    // Now, we do bring todoReducer into our store by defining it as key-value pair..
    reducer: todoReducer
});

// In this example we only have one slice, so we could just write `store.
//Here must of the cases configureStore takes an object with reducers, middleware or enhancers as a parameter.