import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/posts.json';

const currentUser = {       // create an object that represents the currently
    "userName": "NASA",     // logged in user which contains profile information
    "handle": "@nasa",      // such as username, their avatar logo, and handle.
    "image": "nasa.png",    // Later this will come from users login in
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
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,

 reducers: {        // add createTuit reducer function which appends
    createTuit(state, action) {     // the new tuit in the payload at the beginning of the
      state.unshift({       // array of tuits contained in the state. Also copy
        ...action.payload,      // all fields from templateTuit and initialize
        ...templateTuit,        // the unique identifier with a timestamp
        _id: (new Date()).getTime(),
      })
    }
  }
 
});

export const {createTuit} = tuitsSlice.actions;     // export reducer function
export default tuitsSlice.reducer;