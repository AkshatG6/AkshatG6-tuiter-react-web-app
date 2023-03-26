import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';


const currentUser = {       // create an object that represents the currently
  "userName": "NASA",     // logged in user which contains profile information
  "handle": "@nasa",      // such as username, their avatar logo, and handle.
  "image": "nasa.webp",    // Later this will come from users login in
 };
 
const templateTuit = {      // create a template tuit object with some default
...currentUser,     // values and copy over the fields userName, handle and
"topic": "Space",       // image from the currentUser
"time": "2h",
"liked": false,
"replies": 0,
"retuits": 0,
"likes": 0,
 }

const homeTuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,

 reducers: { // define reducer functions as a map, reducer is key
        
        

    deleteTodo(state, action) { // new deleteTodo function extracts
      console.log(state )
      
        const index = state
        .findIndex(post =>
           post._id === action.payload._id); 
           console.log(index)   // index from action's payload and uses it to splice out the todo to be deleted
        state.splice(index, 1)  
        // console.log(index._id)
    },

    likeTuitToggle(state, action) {
      
        const post = state.find((post) =>
              post._id === action.payload._id)  // Finding the ToDo from the action payload.
        // todo.done = !todo.done  // Whatever is the current value of ToDo, change it to !ToDo i.e. reverse the value.
        console.log(post._id)
        post.liked = !post.liked;
        post.likes = (post.liked) ? post.likes + 1 : post.likes - 1;
        post.color = (post.liked) ? 'pink' : 'white';
      },
      todoDoneToggle(state, action) {
        const todo = state.find((todo) =>
              todo._id === action.payload._id)  // Finding the ToDo from the action payload.
        todo.done = !todo.done  // Whatever is the current value of ToDo, change it to !ToDo i.e. reverse the value.
        todo.likes = (todo.done) ? todo.likes + 1 : todo.likes - 1;
        todo.color = (todo.done) ? 'pink' : '';
        todo.icon = (todo.done) ? 'fasHeart' : 'farHeart';
        todo.prefix = (todo.done) ? 'fas' : 'far';

      }, 

      createTuit(state, action) {     // the new tuit in the payload at the beginning of the
        state.unshift({       // array of tuits contained in the state. Also copy
          ...action.payload,      // all fields from templateTuit and initialize
          ...templateTuit,        // the unique identifier with a timestamp
          _id: (new Date()).getTime(),
        })
      }
     
  }
});


export const {deleteTodo, likeTuitToggle, todoDoneToggle, createTuit} = homeTuitsSlice.actions 

export default homeTuitsSlice.reducer;