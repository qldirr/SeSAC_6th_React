// component 작성법
// #1. function 만들기
// #2. return()안에 html 작성
// #3. <함수명/> or <함수명></함수명> 둘 중 하나의 형태로 작성
// 화살표 함수 가능
// const Larva = () => {}

// Q) 언제 사용하면 좋을까??
// A) 반복적인 html 축약 버전으로 사용, 큰페이지, 자주 변경되는 UI
// + 장점) html 더러운걸 깔끔하게 정리, 누구든지 봐도 한눈에 이 컴포넌트가 무슨 용도의 html인지 파악

// 지역 변수 개념

import './Larva.css'   // css 파일 import

function Larva() {
    return (
        <>
        <div className="larva">

            <div className="worm worm1"></div>
            <div className="worm worm2"></div>
            <div className="worm worm3"></div>
            <div className="worm worm4"></div>
            <div className="worm worm5"></div>
        </div>
        </>
    )
}

export default Larva