"use client";

import React, { useState } from "react";
import { LinearGradient } from "react-text-gradients";

const ExpandableText = ({ children, maxLength = 900, style  }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = React.Children.toArray(children);
  const textString = text.reduce((acc, child) => acc + (typeof child === "string" ? child : " "), "");

  // Ensure that the text is a string and check if it needs truncation
  const needsTruncation = textString.length > maxLength;

  const renderContent = () => {
    if (isExpanded || !needsTruncation) {
      return children;
    } else {
      // If the text needs truncation, render only the string part up to maxLength
      // and add an ellipsis at the end
      return textString.slice(0, maxLength) + '...';
    }
  };

  return (
    <div className="text-third text-[.8rem] mx-auto mt-2 relative z-0"   style={{ ...style }}  >
      <div
        className={`overflow-hidden transition-all duration-300 z-0 ease-in-out ${
          isExpanded ? 'max-h-full' : 'max-h-[10em]'
        }`}
        style={{
          position: 'relative',
        }}
      >
        <p>{renderContent()}</p>
        {!isExpanded && needsTruncation && (
          <div
            className="absolute bottom-0 left-0 right-0 z-0 h-12 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1) 90%)',
            }}
          />
        )}
      </div>
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-third font-black cursor-pointer bg-white mx-auto mt-4 flex items-center hover:bg-slate-200 p-4 rounded-2xl transition duration-300 ease-in-out relative z-0"
        >
          {isExpanded ? (
            <>
              <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
                Weniger anzeigen
              </LinearGradient>
              <img
                src="/expandless.svg"
                alt="Collapse text icon"
                className="h-[1rem] ml-2 z-0"
              />
            </>
          ) : (
            <>
              <LinearGradient gradient={["to left", "#FF00FF ,#3B9FEE"]}>
                Mehr anzeigen
              </LinearGradient>
              <img
                src="/expandmore.svg"
                alt="Expand text icon"
                className="h-[1rem] ml-2 z-0"
              />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;