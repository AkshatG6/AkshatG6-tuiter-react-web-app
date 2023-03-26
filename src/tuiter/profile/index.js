import React from "react";
// import posts from "./tuits.json";
// import HomeItem from "./home-item";




import { useDispatch, useSelector} from "react-redux";

import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const user = useSelector(state => state.userProfiles)
 return(
  //  <h1>Home Component</h1>
//   <div className="row">
//     <ul className="list-group list-group-flush p-0 border rounded">
//       {user.firstName} HAHAHA
//     </ul>
//    </div>

<div className="row">
        <div className="d-flex">
          <div className="col-1">
            <i className="bi bi-arrow-left fs-5"></i>
          </div>

          <div
              className="col-5 d-flex align-items-center fw-bolder">
            <div>
            {/* {user.firstName} 
            {' '}
            {user.lastName}  */}
            {user.userName}
            </div>
          </div>
          
        </div>
        <div className="d-flex">
          <div className="col-1">
          </div>
          <div
              className="col-5 d-flex align-items-center" style={{ fontFamily: 'Arial' , fontSize: 12 }}>
            {user.tweets} {"Tweets"} 
          </div>
          
        </div>
        
        <div className="mt-2">
          <img className="w-100"
               src={"/images/web.png"}
               alt=""/>
        </div>

        <div className="d-flex position-relative ps-4 mb-5">
          {/* <div className=""> */}
          <img
              className="col-3 border border-white border-3 rounded-circle position-absolute top-0 translate-middle-y"
              src={"/images/reactIcon.png"}
              alt=""/>
          {/* </div> */}

          <div className="position-absolute me-2 end-0">
            <Link
                to={"/tuiter/edit-profile"}
                className="btn btn-light rounded-pill fw-bolder mt-3 border border-1 border-dark">
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="mt-5 ps-4 pe-3">
          <div className="fw-bolder fs-5">
            {/* {user.firstName} 
            {' '}
            {user.lastName}  */}
            {user.userName}

          </div>

          <div>
            {user.handle}
          </div>

          <div className="mt-3">
            {user.bio}
          </div>

          <div className="mt-3 d-flex">
            <div className="me-4">
              <i className="bi bi-geo-alt me-2"></i>
              {user.location}
            </div>
            <div className="me-4">
              <i className="bi bi-balloon me-2"></i>
              Born {user.dateOfBirth}
            </div>
            <div>
              <i className="bi bi-calendar3 me-2"></i>
              Joined {user.dateJoined}
            </div>
          </div>

          {user.website &&
              <div>
                <i className="fa-solid fa-link me-2"></i>
                {user.website}
              </div>}

          <div className="mt-3 d-flex">
            <div className="me-4 d-flex">
              <div className="fw-bolder me-2">
                {user.followingCount}
              </div>
              Following
            </div>

            <div className="d-flex">
              <div className="fw-bolder me-2">
                {user.followersCount}
              </div>
              Followers
            </div>
          </div>
        </div>

      </div>
 );
};

export default ProfileComponent;