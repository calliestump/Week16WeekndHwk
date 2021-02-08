import React from "react";
import Friend from "./Friend";

const masterFriendSuggestionList = [
  {
    suggestionName: "Random Person 1"
  },
  {
    suggestionName: "Random Person 2"
  }
];

function FriendSuggestion(){
  return (
    <React.Fragment>
      <div class="friendSuggestions">
        <p>Lorem ipsum</p>
        {masterFriendSuggestionList.map((friendARG, index) => 
          <Friend 
            suggestionName = {friendARG.suggestionName}
            key = {index}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default FriendSuggestion;