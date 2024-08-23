// 2. Todo Item 작성
import React from "react";
import { ToDoItem } from "../types/types";
import "../styles/TodoList.scss";

// TodoItem의 props 타입 정의
// {todo} => {todo : {id, text, completed}}
interface Props {
  todo: ToDoItem;
  toggleComplete(id: number): void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}
