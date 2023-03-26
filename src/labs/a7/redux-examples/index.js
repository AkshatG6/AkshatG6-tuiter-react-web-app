import React from "react";

import HelloReduxExampleComponent from "./hello-redux-example-component"; // import the component that consumes the data
import hello from "./reducers/hello"; // import reducer that calculates/generates the data
import todosReducer from "./reducers/todos-reducer";

import Todos from "./todo-component";

import { configureStore } from "@reduxjs/toolkit"; // combine all reducers into a single store
// import {createStore} from "redux"; // import createStore to store data from reducers
import {Provider} from "react-redux"; // import Provider which will deliver the data
// const store = createStore(hello);  // create data storage

const store = configureStore({ // each available through these namespaces
    reducer : {hello, todosReducer}
})



const ReduxExamples = () => {
  return(
    <Provider store={store}> {/* //Provider delivers data in store to child elements */}

        <div>
        <h2>Redux Examples</h2> {/**Not a component, just regular h2 */}
        <Todos/>
        <HelloReduxExampleComponent/> {/* // component consumes the data */}
        </div>
    </Provider>
  );
};

export default ReduxExamples;