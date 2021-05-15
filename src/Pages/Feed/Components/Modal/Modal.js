import React, { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({ flg, handleModal }) => {
  const checkDataArr = [
    {
      id: 1,
      type: "카테고리1",
      isChecked: false,
    },
    {
      id: 2,
      type: "카테고리2",
      isChecked: false,
    },
    {
      id: 3,
      type: "카테고리3",
      isChecked: false,
    },
  ];

  const [checkList, setCheckList] = useState(checkDataArr);
  const [checkItemNum, setCheckItemNum] = useState([]);

  const saveFilterData = () => {
    handleModal();
    getCheckeddFilterData();
  };

  const onInputValueChange = (selectId) => {
    const updatedChecked = checkList.map((item) =>
      item.id === selectId ? { ...item, isChecked: !item.isChecked } : item
    );
    setCheckList(updatedChecked);
  };

  const getCheckeddFilterData = () => {
    let result = [];

    const updatedCheckedItem = checkList.filter(
      (item) => item.isChecked === true
    );

    for (let i = 0; i < updatedCheckedItem.length; i++) {
      result.push(updatedCheckedItem[i].id);
    }
    setCheckItemNum(result);
  };

  return (
    <div className={`Modal ${flg && "on"}`}>
      <h2>필터</h2>
      <div className="checkList">
        {checkDataArr.map((data) => {
          return (
            <div className="checkFilter" key={data.id}>
              <input
                id={data.id}
                value={data.type}
                type="checkbox"
                onChange={() => onInputValueChange(data.id)}
              />
              <span>{data.type}</span>
            </div>
          );
        })}
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
