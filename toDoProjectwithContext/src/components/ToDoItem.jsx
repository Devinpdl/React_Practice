// import React, { useState } from 'react'; // Import useState from React
// import { usedToDo } from '../contexts/ToDoContext';

// function ToDoItem({ todo }) {
//   const [isToDoEditable, setisToDoEditable] = useState(false)
//   const [toDoMsg, settoDoMsg] = useState(todo.todo);
//   //Here, whatever the value of todo is, it will be passed to the dispatch function in our context provider
//   //and then stored inside the global state using the add Or UpdateTodos action...
//   //First, we're bringing the contexts..

//   const {updateToDo, deleteTodo, toggleCompleted} = usedToDo;
//   //Here, usedToDo in the R.H.S is our context provider that we created earlier on.
//   //Whereas, in the L.H.S ., we are accessing the methods/functions that we exported from there.

//   //Now, we add editToDo functionality...
//   const editToDo = () =>{
//     updateToDo(todo.id, {...todo, todo: toDoMsg});
//     setisToDoEditable(false);

//   }

//   const toggleCompletedd = () =>{
//     toggleCompleted(todo.id);

//   }
    

//   return (
//       <div
//           className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//               todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//           }`}
//       >
//           <input
//               type="checkbox"
//               className="cursor-pointer"
//               checked={todo.completed}
//               onChange={toggleCompletedd}
//           />
//           <input
//               type="text"
//               className={`border outline-none w-full bg-transparent rounded-lg ${
//                   isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//               } ${todo.completed ? "line-through" : ""}`}
//               value={todoMsg}
//               onChange={(e) => setTodoMsg(e.target.value)}
//               readOnly={!isTodoEditable}
//           />
//           {/* Edit, Save Button */}
//           <button
//     className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//     onClick={() => {
//         if (todo.completedd) return;

//         if (isToDoEditable) {
//             editToDo();
//         } else setisToDoEditable((prev) => !prev); // Corrected variable name
//     }}
//     disabled={todo.completed}
// >
//     {isToDoEditable ? "📁" : "✏️"}
// </button>

//           {/* Delete Todo Button */}
//           <button
//               className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//               onClick={() => deleteTodo(todo.id)}
//           >
//               ❌
//           </button>
//       </div>
//   );
// }

// export default ToDoItem;

import React, { useState } from 'react';
import { usedToDo } from '../contexts/ToDoContext';

function ToDoItem({ todo }) {
  const [isToDoEditable, setisToDoEditable] = useState(false);
  const [toDoMsg, settoDoMsg] = useState(todo.todo);
  
  const { updateToDo, removeToDo, toggleComplete } = usedToDo();

  const editToDo = () => {
    updateToDo(todo.id, { ...todo, todo: toDoMsg });
    setisToDoEditable(false);
  }

  const handleToggleComplete = () => {
    console.log(todo.id);
    toggleComplete(todo.id);
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={handleToggleComplete} // Ensure correct function name
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isToDoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={toDoMsg}
        onChange={(e) => settoDoMsg(e.target.value)}
        readOnly={!isToDoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isToDoEditable) {
            editToDo();
          } else setisToDoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isToDoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeToDo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default ToDoItem;