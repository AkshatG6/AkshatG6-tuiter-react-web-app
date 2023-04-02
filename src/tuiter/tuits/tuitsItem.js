import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart} from '@fortawesome/free-regular-svg-icons'
import { faCancel, faCheckCircle, faCross, faEllipsis, faTimes } from "@fortawesome/free-solid-svg-icons"
import TuitStats from "./tuitStats";

// Reducer 

// import {deleteTodo} from "../reducers/home-tuits-reducer";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";

const TuitItem = ({post}) => {

  const tuitItem = useSelector(state => state.homeTuitsReducer)
  const dispath = useDispatch();

  const deleteTuitHandler = (index) => {
    console.log("click", index);
    dispath(deleteTuitThunk(index))
  }

 return(
    <li className="list-group-item">
    <div className="row">
        <div className="col-1 d-flex justify-content-center">
          <img src={`/images/${post.image}`} alt = "" width="48px" height="48px" className="rounded-circle" /> 
        </div>
    
        <div className="col-11">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div style={{ fontWeight: 'bold' }}>
                  {post.userName}
                </div>
                <FontAwesomeIcon className="ms-2" icon={faCheckCircle} color="#00ACEE" />
                <div className="text-dark ms-2">{post.handle}</div>
                
                <div className="ms-2 text-dark">- {post.time}</div>

                


              </div>
    
                    <li className="list-group-item border-0">
                          <i className="bi bi-x-lg float-end" onClick={() => 
                              deleteTuitHandler(post)}      // new Delete button sends index of todo to delete to handler. Note () => {} because we are passing index parameter otherwise gets into infinite loop
                              >
                          </i>
                    </li>
                  {/* ) */}
            </div>
            <div className="text-dark">
              {post.content}
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
                    <div >
                    {post.tuit}
                    </div>
            </div>

            {/* <div className="rounded-4 border border-1 border-dark overflow-hidden mt-3">
                <img src = {`/images/${post.image}`} alt="" width="100%" height="auto" />
                
                {!!post.imageTitle || !!post.imageContent || !!post.imageUrl
      ? 
                  <div className="border-top border-1 border-dark text-dark p-3">
                  {!!post.imageTitle ? <div className="text-dark">
                      {post.imageTitle}
                    </div> : null }
                  {!!post.imageContent ? <div>
                      {post.imageContent}
                    </div> : null }
                  {!!post.imageUrl
          ? <a className="text-decoration-none text-dark" href ={`https://www.${post.imageUrl}`}>
                      <i className="fa-solid fa-link"></i>
                      {post.imageUrl}
                    </a> : null }
                  </div>
                 : null }
            </div> */}
            
            <div className="row mt-3 text-dark nav nav-tabs border-0">
                <TuitStats post = {post} />
            </div>
        </div>
        </div>
        
  </li>
 );
};
export default TuitItem;