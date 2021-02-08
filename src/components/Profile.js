import React from "react";

function Profile(){
  const userName = "Kellie A. Corrigan";
  return (
    <React.Fragment>
      <div class="profileComponent">

        {/* Place Profile Image Here */}
        <p class="name">{userName}</p>
        <a class="profileHyperLink" href="tweets">TWEETS {" "}</a>
        <a class="profileHyperLink" href="following">FOLLOWING {" "}</a>
        <a class="profileHyperLink" href="followers">FOLLOWERS {" "}</a>
        <br /><br />
      </div>
    </React.Fragment>
  );
}

export default Profile;