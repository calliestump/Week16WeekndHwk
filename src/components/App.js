import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Description from "./Description";
import ChatLog from "./ChatLog";
import FriendSuggestions from "./FriendSuggestions";


function App(){
  return ( 
    <React.Fragment>
      <Header />
      <Profile/>
      <Description/>
      <ChatLog/>
      {/* <FriendSuggestions/> */}
    </React.Fragment>
  );
}

export default App;