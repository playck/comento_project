import React from "react";
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="FeedMain">
      <aside>
        <button className="loginBtn">로그인</button>
      </aside>
      <div className="Feed">
        <div className="orderBtn">
          <div>
            <span className="active">∙ 오름차순 &nbsp;</span>
            <span>∙ 내림차순</span>
          </div>
          <button className="filterBtn">필터</button>
        </div>
        <article className="feedCard">
          <div className="cardHeader">
            <div className="categoryName">카테고리 이름</div>
            <div className="categoryId">id</div>
          </div>
          <div className="underBar"></div>
          <div className="userContent">
            <div className="userId">userId &nbsp;</div>
            <div className="verticalBar"></div>
            <div className="createDay">&nbsp; 2021-05-11</div>
          </div>
          <h1>TitleTitleTitleTitleTitle</h1>
          <p>
            ContentContentContentContentContentContentContentContentContentContentContentContent
          </p>
        </article>
      </div>
    </div>
  );
};

export default Feed;
