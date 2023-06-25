import React from "react";
import "./ExpandableTxt.css";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableTxt = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  // Specific use-case ...
  // If value of maxChars is equal to, OR surpasses, the length of children
  // ... than NO NEED for expand button
  if (maxChars >= children.length) return <p>{children}</p>;

  //if not (above), than just deliver the code below, as usual/planned
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableTxt;
