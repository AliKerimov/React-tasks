import React from "react";

function Alert(props) {
  // TODO: start from here
  return props.children;
}

function Task1() {
  return (
    <div>
      <Alert>This is sample alert</Alert>
      <Alert severity="error">This is error alert</Alert>
    </div>
  )
}

export default Task1;
