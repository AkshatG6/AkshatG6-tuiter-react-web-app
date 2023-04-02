import Nav from "../nav";
import ExploreComponent from "./react_explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import { Routes, Route} from "react-router";
import HomeComponent from "./home"
import TuitsList from "./tuits"

import whoReducer
  from "./reducers/who-reducer";

import tuitsReducer from "./reducers/tuits-reducer";

import homeTuitsReducer from "./reducers/home-tuits-reducer";
 

import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import profileReducer from "./reducers/profile-reducer";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";
const store = configureStore(
  {reducer: {who: whoReducer ,tuits: tuitsReducer, homeTuits: homeTuitsReducer, userProfiles: profileReducer}});


function Tuiter() {
    return(
        <Provider store={store}>
            
            <div>
            {/* <Nav/>
            <NavigationSidebar active = "home"/> */}
            {/* <WhoToFollowListItem/>
            <WhoToFollowListItem who={{
            userName: 'Tesla', handle: 'tesla',
            avatarIcon: 'tesla.jpeg',
            }}/>
            <WhoToFollowListItem who={{
            userName: 'SpaceX', handle: 'SpaceX',
            avatarIcon: 'spacex.jpeg',
            }}/> */}
            {/* <WhoToFollowList/>
            <PostSummaryList/>
            <h1>Tuiter</h1> */}
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                    style={{"position": "relative"}}>
                {/* <ExploreComponent/> */}
                <Routes>
                    <Route index element = {<HomeComponent/>} />
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="react_explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfile/>}/>
                    {/* <Route path="tuit" element={<TuitsList/>}/> */}
                </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
                </div>
        </div>

       </div>


        </Provider>
       
    );
 }
 export default Tuiter