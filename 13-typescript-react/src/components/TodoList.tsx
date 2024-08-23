import React, { useRef, useState } from "react";
import TodoItem from "./TodoItem";
import { ToDoItem } from "../types/types";

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 todo 목록

  // 3. Todo 추가
  const [newTodo, setNewTodo] = useState<string>(""); // 새로 추가될 todo 하나

  // 4. 포커싱
  const inputRef = useRef<HTMLInputElement>(null);
  // <HTMLInputElement> : 참조하려는 DOM 요소의 타입 지정
  // 즉, input 요소 참조

  // 3. Todo 추가 함수
  const addTodo = () => {
    const updateddTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updateddTodos); // 전체 todo에 새 todo 추가
    setNewTodo(""); // input 초기화
  };

  // 4. 포커싱 - useRef로 생성한 inputRef를 사용해 입력창에 포커싱
  const focusInput = () => {
    inputRef.current?.focus(); // 존재하면 포커싱
  };

  // 5. key down event(enter key) 입력시 todo 추가
  const keyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // 6. toggle - todo item 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          placeholder="add new Todo!!"
          onChange={(e) => setNewTodo(e.target.value)}
          ref={inputRef} // ref 연결
          onKeyDown={(e) => keyDownEvent(e)}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}
