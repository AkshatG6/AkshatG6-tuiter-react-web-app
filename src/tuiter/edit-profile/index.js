import React, {useState} from "react";


import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { changeUserInfo } from "../reducers/profile-reducer";


const EditProfile = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userProfiles);
    // const[firstName, setFirstName] = useState(userInfo.firstName);
    // const[lastName, setLastName] = useState(userInfo.lastName);
    const[userName, setUserName] = useState(userInfo.userName)
    const[bio, setBio] = useState(userInfo.bio);
    const[location, setLocation] = useState(userInfo.location);
    const[dateOfBirth, setDateOfBirth] = useState(userInfo.dateOfBirth);
    const[website, setWebsite] = useState(userInfo.website);

    const saveProfile = () => {
        console.log("here")
        dispatch(changeUserInfo({userName, bio, location, website, dateOfBirth}))
    }
    console.log('I was triggered during render')
    console.log(userName)
 return(
  //  <h1>Home Component</h1>
  
//    <div className="row">
//     <h4>Edit Profile</h4>
//    </div>

<div className="row">
        <div className="d-flex justify-content-between align-content-center">
          <div className="d-flex">
            <Link className="me-4 d-flex align-items-center"
                  to="/tuiter/profile"
            >
              <i className="bi bi-x-lg fs-6"></i>
            </Link>

            <div
                className=" d-flex align-items-center fw-bolder">
              <div>
                Edit Profile
              </div>
            </div>
          </div>

          <Link
              className="btn btn-dark rounded-pill fw-bolder border border-1 border-dark"
              to="/tuiter/profile"
              onClick={() => 
                saveProfile()}>
            Save
          </Link>
        </div>

        <div className="mt-2 position-relative">
          <img className="w-100"
               src={"/images/webWall.png"}
               alt=""/>
          <div
              className="position-absolute top-50 start-50 translate-middle d-flex">
            <div className="me-5">
              <i className="bi bi-camera fs-4"></i>
            </div>
            <div>
              <i className="bi bi-x-lg fs-4"></i>
            </div>
          </div>
        </div>

        <div className="d-flex position-relative ps-4 mb-5">
            <img
                className=" col-3 img-fluid border border-dark border-3 rounded-circle position-absolute top-0 translate-middle-y"
                src="/images/reactIcon.png"
                alt=""
            />
            <i className="bi bi-camera-fill position-absolute top-50 start-0 translate-middle-y"></i>
        </div>

        


        <div className="mt-5 ps-3 pe-3">
          <div className="position-relative">
            <label className="position-absolute ps-3">Name</label>
            <input className="form-control pt-4" type="text"
                   value={userName}
                   onChange={e => {
                     setUserName(e.target.value)}}>
            </input>
          </div>

          <div className="position-relative mt-3">
            <label className="position-absolute ps-3">Bio</label>
            <textarea className="form-control pt-4"
                      rows={3}
                      value={bio}
                      onChange={e => {
                        setBio(e.target.value)}}>

                        </textarea>
          </div>

          <div className="position-relative mt-3">
            <label className="position-absolute ps-3">Location</label>
            <input className="form-control pt-4" type="text"
                   value={location}
                   onChange={e => {
                     setLocation(e.target.value)}}>

                     </input>
          </div>

          <div className="position-relative mt-3">
            <label className="position-absolute ps-3">Website</label>
            <input className="form-control pt-4" type="text"
                   value={website}
                   onChange={e => {
                     setWebsite(e.target.value)}}>

                     </input>
          </div>

          <div className="position-relative mt-3 pb-5">
            <label className="position-absolute ps-3">Birth date</label>
            <input className="form-control pt-4" type="date"
                   value={dateOfBirth}
                   onChange={e => {
                     setDateOfBirth(e.target.value)}}>

                     </input>
          </div>
        </div>

      </div>
 );
};

export default EditProfile;