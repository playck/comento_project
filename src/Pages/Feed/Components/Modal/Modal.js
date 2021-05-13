import React from "react";
import "./Modal.scss";

const Modal = ({ flg, handleModal }) => {
  const saveFilterData = () => {
    handleModal();
  };

  return (
    <div className={`Modal ${flg && "on"}`}>
      <h2>필터</h2>
      <div className="checkList">
        <div>
          <input type="checkbox" checked />
          <span>카테고리1</span>
        </div>
        <div>
          <input type="checkbox" checked />
          <span>카테고리2</span>
        </div>
        <div>
          <input type="checkbox" checked />
          <span>카테고리3</span>
        </div>
      </div>
      <div className="closeBtn">
        <img
          alt="x"
          src="https://images.velog.io/images/playck/post/a52fda84-84ee-4b59-a65d-7778eecc61ab/%EA%B7%B8%EB%A3%B9%20560.svg"
        />
      </div>
      <div className="saveBtn">
        <button onClick={() => saveFilterData()}>저장하기</button>
      </div>
    </div>
  );
};

export default Modal;
