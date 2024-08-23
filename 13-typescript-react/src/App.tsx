import React from "react";
// import Student from "./components/Student";
// import Card from "./components/Card";
import TodoList from "./components/TodoList";
import PostList from "./components/PostList";

function App() {
  // #1.
  // const handleClick = (name: string, grade: number): void => {
  //   console.log(`hi i am ${name} and ${grade}`);
  // };
  return (
    <div className="App">
      {/* <Student name="sesac" grade={3} handleClick={handleClick} />
      <hr />
      <Card title="오늘 배울 것은">
        <p>TypeScript with React</p>
      </Card> */}
      <TodoList/>
      <hr />
      <PostList/>
    </div>
  );
}

export default App;
