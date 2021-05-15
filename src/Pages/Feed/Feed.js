import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedListData } from "../../store/modules/feedList";
import { getAdsListData } from "../../store/modules/adsList";
import Aside from "./Components/Aside/Aside";
import Modal from "./Components/Modal/Modal";
import "./Feed.scss";

const Feed = () => {
  const { feedList, loading } = useSelector((state) => state.feedList);
  const { adsList } = useSelector((state) => state.adsList);
  const [flg, setFlg] = useState(false);
  const [page, setPage] = useState(1);
  const [ord, setOrd] = useState("asc");
  const [arr, setArr] = useState("&category[]=1&category[]=2&category[]=3");
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedListData(page, ord, arr, limit));
    dispatch(getAdsListData(page, 1));
    window.addEventListener("scroll", infiniteScroll, true);
  }, [ord, arr, limit]);

  const handleModal = () => {
    setFlg(!flg);
  };

  const handleFeedOrd = () => {
    if (ord === "asc") {
      setOrd("desc");
    } else {
      setOrd("asc");
    }
  };

  const handleFeedfilter = (data) => {
    setArr(data);
  };

  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (limit < 30) {
      if (scrollTop + clientHeight >= scrollHeight) {
        setLimit(limit + 10);
      }
    } else {
      return;
    }
  };

  return (
    <div className="FeedMain">
      <Aside />
      <div className="Feed">
        <div className="orderBtn">
          <div>
            <span
              className={ord === "asc" ? "ordActive" : ""}
              onClick={handleFeedOrd}
            >
              ∙ 오름차순 &nbsp;
            </span>
            <span
              className={ord === "desc" ? "ordActive" : ""}
              onClick={handleFeedOrd}
            >
              ∙ 내림차순
            </span>
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
                  {adsList.data.map((ads, id) => {
                    return (
                      <article className="adsCard" key={id}>
                        <div className="cardHeader">
                          <div className="sponserName">sponsored</div>
                        </div>
                        <div className="adsContent">
                          <div className="adsImg">
                            <img
                              alt="광고사진"
                              src={`https://cdn.comento.kr/assignment/${ads.img}`}
                            />
                          </div>
                          <div className="adsText">
                            <h1>
                              {ads.title.length > 50
                                ? `${ads.title.slice(0, 50)}...`
                                : ads.title}
                            </h1>
                            <p>
                              {ads.contents.length > 150
                                ? `${ads.contents.slice(0, 150)}...`
                                : ads.contents}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
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
      <div className={`Modals ${flg && "on"}`}></div>
      <Modal
        flg={flg}
        handleModal={handleModal}
        handleFeedfilter={handleFeedfilter}
      />
    </div>
  );
};

export default Feed;
