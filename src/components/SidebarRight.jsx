import React from "react";

function SidebarRight() {
  return (
    <div id="sidebar-right">
      <input type="text" placeholder="  Find or start a conversation" />
      <div className="parameters">
        <div className="fields">
          <div className="icon">
            <i className="ri-user-add-fill"></i>
          </div>
          <p className="font-text">Friends</p>
        </div>
        <div className="fields">
          <div className="icon">
            <i className="ri-snowy-fill"></i>
          </div>
          <p className="font-text">SnowsGiving</p>
        </div>
        <div className="fields">
          <div className="icon">
            <i className="ri-mail-send-fill"></i>
          </div>
          <p className="font-text">Channels</p>
        </div>
      </div>
      <div className="direct__messages">
        <p>DIRECT MESSAGES</p>
        <div className="icon">
          <i className="ri-add-fill"></i>
        </div>
      </div>
      <div className="messages">
        <div className="message__1">
          <div className="messages__img">
            <img
              className="message__img"
              src="https://global-uploads.webflow.com/62014002185c7b256316ef63/6227d82810c94904f3e31ed0_60e3da6ed31d54c893511a9e_mee6.png"
              alt=""
            />
          </div>
          <div className="message__text">
            <p>Auto Bot</p>
          </div>
        </div>
        <div className="message__1">
          <div className="messages__img">
            <img
              className="message__img"
              src="https://arweave.net/-VtPrHE59bZi6c4ieoKqg6FpYZnTGhb0i_RkccMwTqA"
              alt=""
            />
          </div>
          <div className="message__text">
            <p>Crypto Punk</p>
          </div>
        </div>
        <div className="message__1">
          <div className="messages__img">
            <img
              className="message__img"
              src="https://i.seadn.io/gae/_CPjOk3B1hrU8K5Xg2hHa6IOlrimiMrthGutQFyJoVnIOwCaWds4hMEsGLx9R7gYi8H2VBxaw7y2vM42PXFJQlZLjBTv0apcbc0QuBI?auto=format&w=1000"
              alt=""
            />
          </div>
          <div className="message__text">
            <p>Donald trump</p>
          </div>
        </div>
        <div className="message__1">
          <div className="messages__img">
            <img
              className="message__img"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="message__text">
            <p>Doge Enthusiast</p>
          </div>
        </div>
      </div>
      <div className="bottom-box">
        <div className="profile__box">
          <div className="profile-picture">
            <img
              className="bottom__img"
              src="https://global-uploads.webflow.com/62014002185c7b256316ef63/6227d82810c94904f3e31ed0_60e3da6ed31d54c893511a9e_mee6.png"
              alt=""
            />
          </div>
          <div className="profile__text">
            <p>Coderblip</p>
            <p className="profile__code">#f545352</p>
          </div>
        </div>
        <div className="bottom__icons">
          <div className="bottom__icon">
            <i className="ri-headphone-fill"></i>
          </div>
          <div className="bottom__icon">
            <i className="ri-phone-fill"></i>
          </div>
          <div className="bottom__icon">
            <i className="ri-settings-5-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
