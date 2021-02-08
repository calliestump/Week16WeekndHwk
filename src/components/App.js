import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Description from "./Description";
import Chat from "./Chat";
import FriendSuggestions from "./FriendSuggestions";


function App(){
  return ( 
    <React.Fragment>
      <Header />
      <Profile/>
      <Description/>
      {/* <Chat/>
      <FriendSuggestions/> */}
    </React.Fragment>
  );
}

export default App;