import React, {useState} from 'react'

const SayFunction = () => {
    console.log(useState('welcome!'));    // 자료 잠시 저장하는 용도

    // const [a, b] = useState("") 형태
    // a : state 에 저장할 자료
    // b : state 변경을 도와주는 함수
    // useState("") : 상태 초기값, (숫자, 문자, 배열, 객체 등 값의 형태는 자유로움)

    const [message, setMessage] = useState('welcome!')
    // message : 메세지 현재 상태
    // setMessage() : message state 값 바꾸는 함수

    const onClickEnter = () => {
        setMessage('hello!!')
    }
    const onClickLeave = () => {
        setMessage('bye!!')
    }
    const handleClick = () => {
        setMessage((currentMessage) => {
            return currentMessage === 'welcome!' ? 'Hi' : 'Bye'
        })
    }

  return(
    <div>
        {/* 
            - HTML : onclick="onClickEvent()" -> 문자열 형식의 호출문 등록
            - JS : addEventListener('click', onClickEvent) -> 괄호를 없애 함수를 바로 실행하지 않도록 함
            - React : onClick={onClickEvent} -> JS 와 동일
        */}
        <h1>Function Component State</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={handleClick}>HI</button>
        <h1>{message}</h1>
    </div>

  )
  
}

export default SayFunction