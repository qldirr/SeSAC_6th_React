import React, { useState, useRef } from "react";

export default function Posts() {
  // 게시글 리스트
  const [post, setPost] = useState([]);
  // 작성자
  const [writer, setWriter] = useState("");
  // 제목
  const [title, setTitle] = useState("");
  // 검색 결과 데이터
  const [searchPost, setSearchPost] = useState([]);
  // 검색어
  const [search, setSearch] = useState("");
  // 검색 select
  const [select, setSelect] = useState("writer");

  // 작성자 input
  const writerRef = useRef();
  // 제목 input
  const titleRef = useRef();
  // 검색어 input
  const searchRef = useRef();

  // 게시물 등록
  const addPost = (e) => {
    e.preventDefault();

    // if (writer.trim() === "" || title.trim() === "") return;
    if (writer.trim() === "") {
      writerRef.current.focus();
      return;
    }
    if (title.trim() === "") {
      titleRef.current.focus();
      return;
    }

    const newPost = post.concat({
      id: post.length + 1,
      writer: writer,
      title: title,
    });
    setPost(newPost);
    setWriter("");
    setTitle("");
  };

  // 검색
  const postSearch = () => {
    if (search.trim() === "") {
      searchRef.current.focus();
      return;
    }

    const searched = post.filter((val) => val[select].includes(search));
    setSearchPost(searched);
    searchRef.current.focus();
  };

  // 전체 리스트
  const allPost = () => {
    setSearchPost(post);
  };

  return (
    <>
      {/* 작성 폼 */}
      <form style={{ margin: "10px" }}>
        작성자:
        <input
          type="text"
          placeholder="작성자"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          ref={writerRef}
        />
        제목:
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleRef}
        />
        <button onClick={addPost}>작성</button> <br />
      </form>

      {/* 검색창 */}
      <div style={{ margin: "10px" }}>
        <select onChange={(e) => setSelect(e.target.value)}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어 입력"
          value={search}
          ref={searchRef}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") postSearch();
          }}
        />
        <button onClick={postSearch}>검색</button>
        <button onClick={allPost}>전체</button>
      </div>

      {/* 전체 데이터 리스트 */}
      <table
        border="1"
        cellPadding="10"
        cellSpacing="1"
        style={{ margin: "10px" }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {post.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 검색 데이터 리스트 */}
      {searchPost.length > 0 ? <p>검색 결과</p> : <p>검색 결과가 없음</p>}
      {searchPost.length > 0 && (
        <table
          border="1"
          cellPadding="10"
          cellSpacing="1"
          style={{ margin: "10px" }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {searchPost.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
