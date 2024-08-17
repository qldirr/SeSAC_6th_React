import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log('searchParams,,,,,,', searchParams);

    console.log(searchParams.get('mode'));
    
    
  return (
    // <div className={['Main', searchParams.get('mode')].join(' ')}>
    <div className={`Main ${searchParams.get('mode') || ''}`}>
        <h1>MainPage</h1>
        <button onClick={() => {
            // 'mode' 쿼리 파라미터를 'Dark'로 설정해 URL 업데이트
            setSearchParams({mode:'Dark'})
        }}>Dark Mode</button>
    </div>
  )
}

/**
 * 코드 리뷰
 * useSearchParams() 훅은 현재 URL의 쿼리 파라미터를 읽고 수정할 수 있는 기능 제공
 * 
 * searchParams는 URLSearchParams 객체로 현재 URL의 쿼리 파라미터를 나타냄
 * setSearchParams는 쿼리 파라미터를 수정하는데 사용되는 함수
 * 
 * searchParams.get('mode')는 현재 URL의 쿼리 스트링에서 mode라는 이름의 파라미터 값 추출
 * 
 * 버튼 클릭 이벤트 핸들러는 setSearchParams({mode:'Dark'})를 호출해 쿼리 스트링의 mode 파라미터를 'Dark'로 설정
 * 이로 인해 URL이 업데이트 되며 페이지가 새로고침되지 않고 URL의 쿼리 파라미터가 변경됨
 */
