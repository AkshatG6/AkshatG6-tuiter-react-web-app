import React, {useState} from "react";
import { useDispatch, useSelector} from "react-redux";  // useDispatch hook to call reducers
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

const Todos = () => {
    const todos
        = useSelector(state => state.todosReducer);

    const [todo, setTodo] = useState({do: ''});
    const dispatch = useDispatch(); // get dispacher to invoke reducer functions


    const toggleTodoDone = (todo) => {  // handle checkbox click event, accept todo index
        dispatch(todoDoneToggle(todo)) // send index to reducer function passing index of todo to toggle done field
        
    }

    const deleteTodoClickHandler = (index) => { 
        dispatch(deleteTodo(index)) // dispatch event to deleteTodo reducer function passing index of todo we want to delete
        
    }
       

    const createTodoClickHandler = () => {  // handle click event of button
        dispatch(addTodo(todo)) // call reducer function passing new todo as the payload in the action object
    }
     

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
        do: doValue
        };
        setTodo(newTodo);
    }
      
 return(
   <>
     <h3>Todos</h3> 
     <ul className="list-group">
        <li className="list-group-item">
        <button onClick={createTodoClickHandler}
            className="btn btn-primary w-25 float-end">
                Create 
        </button>
        <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control w-75"/>
        </li>
       {
         todos.map((todo, index) =>
           <li key = {todo._id} className="list-group-item">
                <button onClick={() => 
                    deleteTodoClickHandler(index)}      // new Delete button sends index of todo to delete to handler. Note () => {} because we are passing index parameter otherwise gets into infinite loop
                    
                    className="btn btn-danger 
                                float-end ms-2">
                    Delete
                </button>

                <input type="checkbox" checked={todo.done}
                onChange={() => 
                toggleTodoDone(todo)}
                className="me-2"/>

                {todo.do}
           </li>
         )
       }
     </ul>
   </>
 );
};

export default Todos;
