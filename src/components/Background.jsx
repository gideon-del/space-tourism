import React from "react";

const Background = ({ mobile, tablet, desk }) => {
  return (
    <picture className="fixed w-screen h-screen -z-10">
      <source srcSet={mobile.src} media="(max-width: 600px)" />
      <source srcSet={tablet.src} media="(max-width: 1200px)" />
      <img src={desk.src} className="w-full h-full object-center" />
    </picture>
  );
};

export default Background;
