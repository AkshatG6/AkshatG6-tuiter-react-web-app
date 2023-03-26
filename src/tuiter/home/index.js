// import React from "react";
// import posts from "./posts.json";
// import HomeItem from "./home-item";


// const HomeComponent = () => {
//  return(
//   //  <h1>Home Component</h1>
//    <div className="row">
//     <ul className="list-group list-group-flush p-0">
//       {posts.map(post => <HomeItem key = {post._id} post = {post} />)}
//     </ul>
//    </div>
//  );
// };

// export default HomeComponent;


// Renders TuitsList ==> basic outline of the tuits

import React from "react";
// import posts from "./tuits.json";
// import HomeItem from "./home-item";
import WhatsHappening from "./whats-happening";


import TuitsList from "../tuits/index";

import { useDispatch, useSelector} from "react-redux";



const HomeComponent = () => {
    const tuitsArray = useSelector(state => state.homeTuits)
 return(
  //  <h1>Home Component</h1>
  
   <div className="row">
    <h4>Home</h4>
    <WhatsHappening></WhatsHappening>
    <TuitsList></TuitsList>
   </div>
 );
};

export default HomeComponent;