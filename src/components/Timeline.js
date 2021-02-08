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
  },
  {
    postersName: "Joey",
    post: "Integer et mi vitae lorem auctor faucibus ut at lacus. Nulla at finibus lacus."
  },
  {
    postersName: "Callie",
    post: "Ut pellentesque eros eu arcu facilisis, sed fringilla diam commodo. Nam tincidunt metus a diam gravida, a finibus nisi maximus."
  },{
    postersName: "Aang",
    post: "Integer et mi vitae lorem auctor faucibus ut at lacus. Nulla at finibus lacus."
  },
  {
    postersName: "Appa",
    post: "Ut pellentesque eros eu arcu facilisis, sed fringilla diam commodo. Nam tincidunt metus a diam gravida, a finibus nisi maximus."
  }
];

function Timeline(){
  return (
    <React.Fragment>
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
  );
}

export default Timeline;