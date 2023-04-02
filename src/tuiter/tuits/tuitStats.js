// Renders row of 4 columns displaying the stats

import React from "react";
// import { FaComment } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faComment} from '@fortawesome/free-regular-svg-icons''
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle, faEllipsis, faHeart as fasHeart, fas } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faRetweet, faShareAlt } from "@fortawesome/free-solid-svg-icons";


import {likeTuitToggle, todoDoneToggle} from "../reducers/home-tuits-reducer";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Button } from "bootstrap";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { updateTuitThunk } from "../../services/tuits-thunks";



const TuitStats = ({post}) => {
  // const tuitItem = useSelector(state => state.homeTuitsReducer)
  const dispatch = useDispatch();
  const likedTuitHandler = (index) => {
    // const Icon = done ? AiFillHeart : AiOutlineHeart;
    dispatch(likeTuitToggle(index))
  }

  const toggleTodoDone = (todo) => {  // handle checkbox click event, accept todo index
    console.log(todo.liked)
    dispatch(todoDoneToggle(todo)) // send index to reducer function passing index of todo to toggle done field
    
}

  

    return (
        <div className="row mt-3 text-dark nav nav-tabs border-0 ">
            <div className="col-2 mt-0 nav-link border-0 rounded-0 text-dark" >
            <FontAwesomeIcon className="me-2" icon={faComment} />
            {post.replies}
            </div>
            <div className="col-2 nav-link border-0 rounded-0 text-dark" >
            <FontAwesomeIcon className="me-2" icon={faRetweet}  />
            {post.retuits}
            </div>
            <div className="col-2 nav-link border-0 rounded-0 text-dark">
            <div>
              {post.likes}
              <i onClick={() => dispatch(updateTuitThunk({
                ...post,
                likes: post.likes + 1
              }))} className="bi bi-heart-fill ms-2 text-danger"></i>
            </div>
            </div>
            <div className="col-2 nav-link border-0 rounded-0 text-dark">
            <div>
              {post.dislikes}
              <i onClick={() => dispatch(updateTuitThunk({
                ...post,
                dislikes: post.dislikes + 1
              }))} >  <FontAwesomeIcon className="me-2 text-danger" icon={faThumbsDown} />  </i>
            </div>
            </div>
            {/* <div className="col-3 nav-link border-0 rounded-0 text-dark">
              {post.liked ?
                  <FontAwesomeIcon className="me-2" icon={faHeart} /> :
                  <FontAwesomeIcon className="me-2" icon={fasHeart} />}
              {post.like}
            </div> */}
            <div className="col-2 nav-link border-0 rounded-0 text-dark" >
            <FontAwesomeIcon className="me-2" icon={faShareAlt} />
            </div>
      </div>
   
    )
  };
  
  export default TuitStats;