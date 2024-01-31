import React, { useState } from "react";

const DropdownApplication = () => {

  const [viewAll, setViewAll] = useState(false);
  const [viewVocal, setViewVocal] = useState(false);
  const [viewDrum, setViewDrum] = useState(false);
  const [viewBase, setViewBase] = useState(false);
  const [viewSyn, setViewSyn] = useState(false);
  const [viewGuitar, setViewGuitar] = useState(false);

  return (
    <div
      id="dropdown"
      className="w-[238px] h-[332px] flex-col justify-center items-center bg-white"
    >
      <li onClick={() => {
          setViewAll(!viewAll);
        }}>
        전체
      </li>
      <li>보컬</li>
      <li>드럼</li>
      <li>베이스</li>
      <li>신디</li>
      <li>기타</li>
    </div>
  );
};

export default DropdownApplication;
