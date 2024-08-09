import React, {useEffect, useState} from 'react'

export default function LifeCycleFunctionChild({ number }) {
    const [input, setInput] = useState('')

    // 1. Mount 시점에 실행 (return 생략) - 렌더링시 한번만 실행
    useEffect(() => {
        console.log('컴포넌트 마운트!! 🔵');
    }, [])
    
    // 2. Mount 시점에 실행 (return 존재)
    useEffect(() => {
        // Mount 시점에 실행 - 렌더링시 한번만 실행
        console.log('컴포넌트 마운트!! 🔵');
        return () => {
            // return 안은 Unmount 시점에 실행
            console.log('컴포넌트 언마운트!! 🔴');
        }
    }, [])
    
    // 3. Mount or Update 시점에 실행(의존성 배열 생략) - 매 렌더링마다 실행(상태 변경마다 실행)
    useEffect(() => {
        console.log('컴포넌트 마운트!! 🔵 or 업데이트 🟢');

    })

    // 의존성 배열이 [] 빈배열 이므로 1, 2 는 렌더링시 한번만 실행
    // 의존성 배열을 생략하는 의미는 '매 렌더링마다 실행' 하겠다는 뜻(상태 변경마다)

    // 4. input 상태가 업데이트 될때 실행
    useEffect(() => {
        console.log('마운트 🔵 or input 상태가 변경됨에 따라 컴포넌트 업데이트 🟠');
    }, [input])   // input 이 배열이 아니라도 의존성 배열에 추가 가능, 문자열/숫자 상관없이 이 값이 변경될때마다 useEffect 가 실행

    return (
        <div style={{color:'white'}}>
            자식 컴포넌트
            <div>현재 number 값은 {number} 입니다</div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
    )
}
