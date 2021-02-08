import React from "react";
import PropTypes from "prop-types";

function Friend(props){
  return (
    <React.Fragment>
      <p>{props.suggestionName}</p>
      <button>Button</button>
      <br /><br />
    </React.Fragment>
  );
}

Friend.propTypes = {
  suggestionName: PropTypes.string.isRequired,
};

export default Friend;