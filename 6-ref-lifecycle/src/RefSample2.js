import React, {useRef, useState} from 'react'

export default function RefSample2() {
    const id = useRef(7)   // 초기값 7
    const [number, setNumber] = useState(0)

    // - useRef() 훅이 반환하는 ref 객체의 속성
    // - 임시 값 저장 : current에 저장된 값이 바뀌어도 컴포넌트는 리렌더링되지 않음

    const plusIdRef = () => {
        id.current += 1   //current 값 직접 수정
        console.log('id.current', id.current);   // 값 증가 확인, 로그에는 클릭하면 값이 올라가지만 화면에는 바로 리렌더링이 되지 않기 때문에 변화가 없음
    }

    const plusNumState = () => {
        setNumber(number + 1)
    }
  return (
    <div>
        <p>함수형 컴포넌트에서 버튼 클릭시 id 값 1씩 증가</p>
        <h2>Ref : {id.current}</h2>
        <button onClick={plusIdRef}>Plus</button>

        <p>
            비교) State는 Ref와 다르게 값이 변경되면 리렌더링되는 것을 확인
        </p>
        {/* 
            Ref 버튼을 눌러 값을 변경하고 State 버튼을 누르면 Ref에서 변경된 값이 화면에 출력
            -> state는 값이 계속 리렌더링되는데 ref는 리렌더링이 되지 않음
            -> 그래서 ref로 변경된 값이 state를 눌렀을때 화면에 렌더링
        */}
        <h2>State : {number}</h2>
        <button onClick={plusNumState}Plus></button>
    </div>
  )
}
