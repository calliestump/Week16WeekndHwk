import React from "react";
import PropTypes from "prop-types";

function TimelinePosts(props){
  return (
    <React.Fragment>
      <div class="timelinePostsComponent">
        <p><strong>{props.postersName}</strong></p>
        <p>{props.post}</p>
        
      </div>
    </React.Fragment>
  );
}

TimelinePosts.propTypes = {
  postersName: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};

export default TimelinePosts;