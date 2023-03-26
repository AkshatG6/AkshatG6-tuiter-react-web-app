// Renders TuitsList ==> basic outline of the tuits

import React from "react";
// import posts from "./tuits.json";
// import HomeItem from "./home-item";



import TuitItem from "./tuitsItem";

import { useDispatch, useSelector} from "react-redux";



const TuitsList = () => {
    const tuitsArray = useSelector(state => state.homeTuits)
 return(
  //  <h1>Home Component</h1>
   <div className="row">
    <ul className="list-group list-group-flush p-0 border rounded">
      {tuitsArray.map(post => <TuitItem key = {post._id} post = {post} />)}
    </ul>
   </div>
 );
};

export default TuitsList;