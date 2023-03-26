// Renders row of 4 columns displaying the stats

import React from "react";
// import { FaComment } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faComment} from '@fortawesome/free-regular-svg-icons''
import { faComment, faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle, faEllipsis, faHeart as fasHeart, fas } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faRetweet, faShareAlt } from "@fortawesome/free-solid-svg-icons";


import {likeTuitToggle, todoDoneToggle} from "../reducers/home-tuits-reducer";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Button } from "bootstrap";
import { icon } from "@fortawesome/fontawesome-svg-core";



const TuitStats = ({post}) => {
  // const tuitItem = useSelector(state => state.homeTuitsReducer)
  const dispatch = useDispatch();

  const likedTuitHandler = (index) => {
    // const Icon = done ? AiFillHeart : AiOutlineHeart;
    dispatch(likeTuitToggle(index))
  }

  const toggleTodoDone = (todo) => {  // handle checkbox click event, accept todo index
    dispatch(todoDoneToggle(todo)) // send index to reducer function passing index of todo to toggle done field
    
}

  

    return (
        <div className="row mt-3 text-dark nav nav-tabs border-0">
            <div className="col-3 nav-link border-0 rounded-0 text-dark" >
            <FontAwesomeIcon className="me-2" icon={faComment} />
            {post.replies}
            </div>
            <div className="col-3 nav-link border-0 rounded-0 text-dark" >
            <FontAwesomeIcon className="me-2" icon={faRetweet}  />
            {post.retuits}
            </div>
            <div className="col-3 nav-link border-0 rounded-0 text-dark">
              <button className="border-0 fg-color-white"  style={{backgroundColor: 'white'}} onClick={() => 
                toggleTodoDone(post)} >
                  <FontAwesomeIcon className="me-2" icon={faHeart} color={post.color} />
                  {post.likes}
                </button>
            </div>
            {/* <div className="col-3 nav-link border-0 rounded-0 text-dark">
              {post.liked ?
                  <FontAwesomeIcon className="me-2" icon={faHeart} /> :
                  <FontAwesomeIcon className="me-2" icon={fasHeart} />}
              {post.like}
            </div> */}
            <div className="col-3 nav-link border-0 rounded-0 text-dark" >
            <FontAwesomeIcon className="me-2" icon={faShareAlt} />
            </div>
      </div>
   
    )
  };
  
  export default TuitStats;