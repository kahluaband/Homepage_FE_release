import React, { useState } from "react";

const sessions = [
  {
    name: "전체",
    text: "전체",
  },
  {
    name: "보컬",
    text: "보컬",
  },
  {
    name: "드럼",
    text: "드럼",
  },
  {
    name: "베이스",
    text: "베이스",
  },
  {
    name: "신디",
    text: "신디",
  },
  {
    name: "기타",
    text: "기타",
  },
];

interface DropdownApplicationProps {
  onSelect: (session: string) => void;
  session: string;
}

const DropdownApplication: React.FC<DropdownApplicationProps> = ({ onSelect, session }) => {

  return (
    <div
      id="dropdown"
      className="w-[180px] md:w-[220px] h-auto flex-col justify-center items-center bg-white text-[18px]"
    >
      {sessions.map((s) => (
        <li className="p-1" key={s.name} onClick={() => onSelect(s.name)}>
          {s.text}
        </li>
      ))}

    </div>
  );
};

export default DropdownApplication;
