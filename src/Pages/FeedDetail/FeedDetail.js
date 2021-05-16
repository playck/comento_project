import React from "react";
import "./FeedDetail.scss";

const Detail = () => {
  return (
    <div className="detail">
      <article className="feedCard">
        <h1 className="title">Title</h1>
        <p className="content">
          contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
        </p>
        <div className="createDay">2020-05-20</div>
      </article>
      <div className="answerInfo">
        답변 <span>2</span>
      </div>

      <article className="answerCard">
        <h2>userName</h2>
        <div className="underBar"></div>
        <p>
          contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
        </p>
        <div className="createDay">2020-05-20</div>
      </article>
    </div>
  );
};

export default Detail;
