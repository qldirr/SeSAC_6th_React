import React from "react";

// interface 설정
interface CardProps {
  title: string;
  children: React.ReactNode;
}
// React.ReactNode - React에서 가장 유연하고 광범위한 타입, 컴포넌트가 자식으로 받을 수 있는 모든 형태의 값 정의

// 1. children 직접 전달
// export default function Card({ title, children }: CardProps) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

// 2. React.FC(children 자동 전달)
// - React.18 이후로 변경됨 -> 자동 전달 X / 명시적으로 적기
// const Card:React.FC<CardProps> = ({title, children}) => {
//   return (
//     <div>
//        <h1>{title}</h1>
//        <div>{children}</div>
//      </div>
//   )
// }

const Card:React.FC<React.PropsWithChildren<CardProps>> = ({title, children}) => {
    // interface 에서 children의 타입을 명시를 하지 않아도 되는 버전
  return (
    <div>
       <h1>{title}</h1>
       <div>{children}</div>
     </div>
  )
}

export default Card