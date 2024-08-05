import React, {useState} from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    // 인자 없는 함수
    const increase = () => {
        setNumber(number+1)
    }

    // 인자 1개 함수
    const alertMsg = (msg) => {
        alert(`${msg} ~ 현재 숫자는 ${number}입니다`)
    }

    // 인자 2개 함수
    const consoleMsg = (e, msg) => {
        console.log('e.target--', e.target);
        console.log(`${msg} ~ 현재 숫자는 ${number}입니다`);
    }
    
    // e.target(부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소)
    // e.currentTarget(이벤트 핸들러가 있는 요소)
    const handleEvent = (e) => {
        console.log('e.target--', e.target);   // span 태그
        console.log('e.currentTarget--', e.currentTarget);   // button 태그

    }

  return (
    <div>
        <h1>Number Counter</h1>
        <h2>{number}</h2>

        {/* 함수에 인자가 없는 경우 : 함수 이름만 전달 */}
        <button onClick={increase}>plus</button>

        {/* 함수에 인자 보내기 */}
        <button onClick={() => {alertMsg('hello')}}>alert 출력</button>
        <button onClick={(e) => {consoleMsg(e, 'hello')}}>console 출력</button>

        {/* e.target VS e.currentTarget */}
        <button onClick={handleEvent}><span>handle Event</span></button>
    </div>
  )
}

export default Counter