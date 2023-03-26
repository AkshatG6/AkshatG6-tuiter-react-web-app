import React from "react";
// import postsArray from './posts.json';
import { useSelector } from "react-redux";
import PostSummaryItem from "./post-summary-list-item";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits)  // get tuits from the state in the store

 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;