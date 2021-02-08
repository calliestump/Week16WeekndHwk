import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Description from "./Description";
import Timeline from "./Timeline";
import FriendSuggestions from "./FriendSuggestions";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return ( 
    <React.Fragment>
      <div class="container">
        <Header />
        <div class="row">
          <Profile/>
          <Timeline/>
          <Description />
          {/* <FriendSuggestions/> */}
        </div>
          
      </div>
    </React.Fragment>
  );
}

export default App;