import React from "react";
import PropTypes from "prop-types";

function TimelinePosts(props){
  // const postersName = "Thato";
  // const post = "Integer et mi vitae lorem auctor faucibus ut at lacus. Nulla at finibus lacus.";
  
  return (
    <React.Fragment>
      <div class="timelinePostsComponent">
        <h3>{props.postersName}</h3>
        <p>{props.post}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

TimelinePosts.propTypes = {
  postersName: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};

export default TimelinePosts;