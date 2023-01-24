import Image from "next/image";
import React from "react";

const Background = ({ mobile, tablet, desk, children }) => {
  return (
    <>
      <style jsx global>
        {`
          body {
            background-image: url(${mobile.src});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center bottom;
          }
          @media (min-width: 35em) {
            body {
              background-image: url(${tablet.src});
            }
          }

          @media (min-width: 64em) {
            body {
              background-image: url(${desk.src});
            }
          }
        `}
      </style>
      {children}
    </>
  );
};

export default Background;
