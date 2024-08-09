import React, { useState, useMemo } from 'react'

// useMemo - 메모이제이션으로 수행한 연산의 결과값을 기억함으로써 불필요한 연산 최소화, 반복작업을 피하기 위함
export default function UseMemoEx() {

    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')   // 재렌더링용

    // [before]
    const calc = () => {
        console.log('열심히 계산중... 💦');
        for (let i = 0; i < 1000000; i++) { }   // 시간 소모적인 작업이라고 가정
        return count ** 2
        
    }
    
    // [after]
    const calcMemo = useMemo(() => {
        console.log('열심히 계산중... 💌');
        for (let i = 0; i < 1000000; i++) { }   // 시간 소모적인 작업이라고 가정
        return count ** 2
        
    }, [count])   // count 가 변경될 때만 계산 수행


    // count 값이 바뀔때만 함수 실행해라
    // input 상태가 바뀌면 컴포넌트는 리렌더링 되지만 calc는 연산되지 않음
    return (
        <div>
            <h1>UseMemo ex</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setCount(() => count + 1)}>Plus</button>
            <p>count : {count}</p>

            {/* [before] - plus버튼을 눌러 렌더링될때 calc() 함수가 실행*/}
            <p>calc : {calc()}</p>

            {/* [after] - useMemo 적용 */}
            <p>calcMemo : {calcMemo}</p>

        </div>
    )
}
