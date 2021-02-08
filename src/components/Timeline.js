import React from "react";
import TimelinePosts from "./TimelinePosts";

const masterPostList = [
  {
    postersName: "Thato",
    post: "Integer et mi vitae lorem auctor faucibus ut at lacus. Nulla at finibus lacus."
  },
  {
    postersName: "Haley",
    post: "Ut pellentesque eros eu arcu facilisis, sed fringilla diam commodo. Nam tincidunt metus a diam gravida, a finibus nisi maximus."
  }
];

function Timeline(){
  return (
    <React.Fragment>
      {/* <div class="whatsHappening"> */}
      {/* </div> */}
      <div class="timelinePosts">
        <input class="whatsHappening" placeholder="Whats Happening?"></input>
        {masterPostList.map((timelinePost, index) => 
          <TimelinePosts 
            postersName = {timelinePost.postersName}
            post = {timelinePost.post}
            key = {index}
          />
        )}
      </div>
    </React.Fragment>
    // <React.Fragment>
    //   <h1>Timeline</h1>
    // </React.Fragment>
  );
}

export default Timeline;