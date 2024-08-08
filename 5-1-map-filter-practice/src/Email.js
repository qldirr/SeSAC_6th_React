import React, { useState } from "react";

export default function Email() {
  const [info, setInfo] = useState([
    {
      id: 1,
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      id: 2,
      name: "김어진",
      email: "djwls0803@gmail.com",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 등록
  const submitInfo = () => {
    if (name.trim().length !== 0 && email.trim().length !== 0) {
      const newInfo = info.concat({
        id: info.length + 1,
        name: name,
        email: email,
      });

      setInfo(newInfo);
      setEmail("");
      setName("");
    }
  };

  // 삭제
  const deleteInfo = (targetId) => {
    const newInfo = info.filter((info) => info.id !== targetId);
    setInfo(newInfo);
  };

  // 키보드 이벤트
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      submitInfo();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={submitInfo}>등록</button>

      <ol style={{ listStyle: "none" }}>
        {info.map((val) => (
          <li key={val.id} onDoubleClick={() => deleteInfo(val.id)}>
            <b>
              {val.name} : {val.email}
            </b>
          </li>
        ))}
      </ol>
    </div>
  );
}
