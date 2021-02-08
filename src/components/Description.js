import React from "react";

function Description(){
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique est id elit porta lacinia. In facilisis dui orci, nec pulvinar diam euismod eu. Cras imperdiet nisi vel odio imperdiet, nec viverra lorem facilisis. Sed egestas nulla orci, vel tincidunt metus hendrerit non. Fusce in lorem ac lorem lacinia lacinia in non augue. Suspendisse laoreet ligula et venenatis venenatis. Sed id convallis velit. Curabitur ac metus purus. Duis id ipsum ornare, luctus metus sed, suscipit neque.";
  return (
    <React.Fragment>
      <br /><br />
      <div class="descriptionComponent">
        <p class="description">{description}</p>
        <br /><br />
      </div>
    </React.Fragment>
    
  );
}

export default Description;