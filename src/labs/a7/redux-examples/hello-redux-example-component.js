import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
 const message = useSelector((state) => state.hello.message); // a paramter, then that parametetr. whatever we want. Here, since we are getting a state, we go state.hello.message is stored.
 return(
   <h3>{message}</h3>
 );
};

export default HelloReduxExampleComponent;