import React, { useState } from 'react'

/**
 * 이벤트 핸들러
 * - 특정 이벤트 발생시 실행되는 함수
 * - (보통 이벤트 객체를 파라미터로 받아서 이벤트에 대한 정보를 접근하고 처리)
 * 
 * 이벤트 객체
 * - 이벤트가 발생한 요소와 관련된 정보를 담고 있는 객체(TMI)
 * 
 * ------------------------------------
 * 이벤트 객체를 사용하지 않아도 이벤트 핸들러는 작동 가능
 * 이벤트 객체는 추가적인 정보 제공하는 역할일 뿐 반드시 사용 필수는 아님
 * 
 * 리액트 이벤트 핸들러는 기본적으로 'event'객체를 자동으로 전달
 * - 순수 js, html : 이벤트 핸들러 설정 시 브라우저가 이벤트 객체를 자동으로 전달해줌
 */


function EventStudy() {
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [message, setMessage] = useState('')

    // 이벤트 객체 없이 상태 업데이트
    const handleClick = () => {
        setCount(count + 1)
    }

    // 이벤트 객체를 사용한 상태 업데이트
    const handleClickWithEvent = (e) => {
        setCount(count + 1)
        // 클릭한 위치의 좌표를 상태에 저장
        setPosition({ x: e.clientX, y: e.clientY })
    }
    
    // 파라미터를 사용하는 핸들러
    const handleClickWithParam = (e, msg) => {
        setCount(count+1)
        setPosition({ x: e.clientX, y: e.clientY })
        console.log('msg--', msg);
    }

    // 일반 함수 : 이벤트 객체를 파라미터로 받지 않음
    const messageFunction = (e) => {
        setMessage(`호출: ${e}`)
        console.log('messageFunction >>', e);
    }

    const messageClick = () => {
        messageFunction('hi')
    }

    return (
        <div>
            {/* 이벤트 객체 없이 handleClick 함수 호출 */}
            <button onClick={handleClick}>클릭</button>
            <div>클릭 횟수 : {count}</div>
            <hr />

            {/* onClick 핸들러 함수에서 이벤트 객체는 자동으로 매개변수 */}
            {/* 이벤트 객체 있이 handleClickWithEvent 호출 */}
            <button onClick={handleClickWithEvent}>클릭(좌표 출력)</button>
            <div>클릭 위치 : X-{position.x}, Y-{position.y}</div>
            <hr />

            {/* 파라미터를 사용해 handleClickWithParam 호출 */}
            {/* e(event 객체)를 직접 보내는 이유는 핸들러 함수에 추가적인 파라미터 전달 */}
            <button onClick={(e) => handleClickWithParam(e, '버튼 클릭됨')}>클릭</button>
            <hr />

            {/* 클릭시 messageClick 호출 */}
            <button onClick={messageClick}>messageClick 호출</button>
            <div>메세지 : {message}</div>
        </div>
    )
}

export default EventStudy