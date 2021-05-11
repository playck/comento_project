import React from "react";
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="FeedMain">
      <button className="loginBtn">로그인</button>
      <div className="Feed">
        <div className="orderBtn">
          <div>
            <span className="active">∙ 오름차순 &nbsp;</span>
            <span>∙ 내림차순</span>
          </div>
          <button className="filterBtn">필터</button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
