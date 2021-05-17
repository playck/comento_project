import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./FeedDetail.scss";

const Detail = () => {
  const [detailList, setDetailList] = useState("");
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://problem.comento.kr/api/view?id=${params.id}`)
      .then(function (res) {
        setDetailList(res.data.data);
      });
  }, []);

  return (
    <div className="detail">
      <article className="feedCard">
        <h1 className="title">{detailList.title}</h1>
        <p className="content">{detailList.contents}</p>
        <div className="createDay">{detailList.created_at?.slice(0, 10)}</div>
      </article>

      <div className="answerInfo">
        답변 <span>{detailList.reply?.length}</span>
      </div>
      {detailList.reply?.map((reply, index) => {
        return (
          <article className="answerCard" key={index}>
            <h2>{reply.user.name}</h2>
            <div className="underBar"></div>
            <p>{reply.contents}</p>
            <div className="createDay">{reply.created_at.slice(0, 10)}</div>
          </article>
        );
      })}
    </div>
  );
};

export default Detail;
