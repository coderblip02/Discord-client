import React from "react";

function SidebarLeft() {
  return (
    <div id="sidebar-left">
      <div className="discord__img__container">
        <img
          className="discord__img"
          src="https://i.pinimg.com/474x/61/38/3a/61383af57925e3f689bb0c18d447e4ee.jpg"
          alt=""
        />
      </div>

      <div className="server__images">
        <img
          className="server__img"
          src="https://global-uploads.webflow.com/62014002185c7b256316ef63/6227d82810c94904f3e31ed0_60e3da6ed31d54c893511a9e_mee6.png"
          alt=""
        />
        <img
          src="https://1.bp.blogspot.com/_vYBCFqUqqy7wXA_LxcnHtgy5VA2dHP4qv2x8PV9-uRzU84KWkn4qj9c7etTAX_6Dzo=w800"
          className="server__img"
          alt=""
        />
        <img
          src="https://rm-core-production.s3.amazonaws.com/logos/6716/large_Tesla_Logo.png"
          className="server__img"
          alt=""
        />
        <img
          src="https://styles.redditmedia.com/t5_68t0qa/styles/communityIcon_jmxgszna0ju81.png"
          className="server__img"
          alt=""
        />
      </div>
    </div>
  );
}

export default SidebarLeft;
