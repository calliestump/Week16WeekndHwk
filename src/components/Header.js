import React from "react";

function Header(){
  return (
    <React.Fragment>
      
        <button class="Home">Home</button>
        <button class="Notifications">Notifications</button>
        <button class="Messages">Messages</button>
        <button class="searchAndTweet">Tweet</button>
        <input class="searchAndTweet" placeholder="Search"></input>
      <hr />
    </React.Fragment>
    
  );
}

export default Header;