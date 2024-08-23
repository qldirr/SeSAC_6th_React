// 여러 파일에서 공통적으로 사용하는 타입 관리

// 1. Type 지정
// 단일 투두 아이템 타입
export interface ToDoItem {
  id: number; // pk
  text: string; // 투두 내용
  completed: boolean; // 완료 여부
}

export interface Postitem {
  id: number;
  title: string;
  body: string;
}
