import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
    {
      _id: "123",
      do: "Accelerate the world's transition to sustainable energy",
      done: false
    },
    {
      _id: "234",
      do: "Reduce space transportation costs to become a spacefaring civilization",
      done: false
    },
   ];
   
   const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: { // define reducer functions as a map, reducer is key
        
        
        
        
        
        
        addTodo(state, action) { // reducer functions receive current state
          state.push({  // mutate current state into new state, e.g.,
            _id: (new Date()).getTime(),    // pushing new object. _id set to current date
            do: action.payload.do,  // do set to "do" object sent through action obj
            done: false         // commonly referred to as the "payload"
          });
        },

        deleteTodo(state, action) { // new deleteTodo function extracts
            const index = action.payload    // index from action's payload and uses it to splice out the todo to be deleted
            state.splice(index, 1)  
        },

        todoDoneToggle(state, action) {
            const todo = state.find((todo) =>
                  todo._id === action.payload._id)  // Finding the ToDo from the action payload.
            todo.done = !todo.done  // Whatever is the current value of ToDo, change it to !ToDo i.e. reverse the value.
        }
       
         
      }
     
   });

   export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions  // export actions so we can call them from UI
   export default todosSlice.reducer