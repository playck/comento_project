import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedListData } from "../../store/modules/feedList";
import Modal from "./Components/Modal/Modal";
import "./Feed.scss";

const Feed = () => {
  const { feedList, loading } = useSelector((state) => state.feedList);
  const [flg, setFlg] = useState(false);
  const [data, setData] = useState("");
  const [arr, setArr] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedListData(1, "asc", arr, 10));
  }, []);

  const handleModal = () => {
    setFlg(!flg);
  };

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
          <button className="filterBtn" onClick={handleModal}>
            필터
          </button>
        </div>

        {feedList.data?.map((feed, index) => {
          return (
            <div key={index}>
              {(index + 1) % 4 === 0 ? (
                <div>
                  <article className="adsCard">
                    <div className="cardHeader">
                      <div className="sponserName">광고이름</div>
                    </div>
                    <div className="adsContent">
                      <div className="adsImg">
                        <img
                          alt="광고사진"
                          src="https://media.vlpt.us/images/playck/post/f04cee49-7383-4854-811e-ed5bc9525ef0/js.png"
                        />
                      </div>
                      <div className="adsText">
                        <h1>TitleTitleTitleTitleTitle</h1>
                        <p>
                          ContentContentContentContentContentContentContentContentContentContentContentContent
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ) : (
                <article className="feedCard">
                  <div className="cardHeader">
                    <div className="categoryName">{feed.id}</div>
                    <div className="categoryId">{feed.category_id}</div>
                  </div>
                  <div className="underBar"></div>
                  <div className="userContent">
                    <div className="userId">{feed.user_id} &nbsp;</div>
                    <div className="verticalBar"></div>
                    <div className="createDay">
                      &nbsp; {feed.created_at.slice(0, 10)}
                    </div>
                  </div>
                  <h1>
                    {feed.title.length > 150
                      ? `${feed.title.slice(0, 150)}...`
                      : feed.title}
                  </h1>
                  <p>
                    {feed.contents.length > 250
                      ? `${feed.contents.slice(0, 250)}...`
                      : feed.contents}
                  </p>
                </article>
              )}
            </div>
          );
        })}
      </div>
      <Modal flg={flg} handleModal={handleModal} />
    </div>
  );
};

export default Feed;
