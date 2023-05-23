// Import the React library.
import React from "react";

// Define the Avatar component.
const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  cursor,
}) => {
  // Create a style object.
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
  };

  // Return a <div> element with the given style and children.
  return <div style={style}>{children}</div>;
};

// Export the Avatar component.
export default Avatar;
