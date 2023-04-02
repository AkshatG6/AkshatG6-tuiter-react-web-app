// Renders TuitsList ==> basic outline of the tuits

import React, {useEffect} from "react";
// import posts from "./tuits.json";
// import HomeItem from "./home-item";



import TuitItem from "./tuitsItem";

import { useDispatch, useSelector} from "react-redux";

import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.homeTuits)
    // const tuitsArray = useSelector(state => state.homeTuits)
    const dispatch = useDispatch();
      useEffect(() => {
      dispatch(findTuitsThunk())
 }, [dispatch])

 return(
  //  <h1>Home Component</h1>
  
   <div className="row">
    <ul className="list-group list-group-flush p-0 border rounded">
    {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

      {tuits.map(post => <TuitItem key = {post._id} post = {post} />)}
    </ul>
   </div>
 );
};

export default TuitsList;