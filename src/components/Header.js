import React from "react";

function Header(){
  return (
    <React.Fragment>
      
        <button class="Home">Home</button>
        <button class="Notifications">Notifications</button>
        <button class="Messages">Messages</button>
        <input class="searchAndTweet" placeholder="Search"></input>
        <button class="searchAndTweet">Tweet</button>
      
      <hr />
    </React.Fragment>
    
  );
}

export default Header;