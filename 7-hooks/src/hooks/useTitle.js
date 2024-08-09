import {useEffect} from 'react'


// custom hooks
export default function useTitle(custom) {    // custom 변수는 app.js에서 받은 문자열
  useEffect(() => {
    //mount 시 실행
    const prevTitle = document.title
    document.title = custom

    // unmount 시 실행(return 뒤)
    return () => (document.title = prevTitle)
  }, [custom])   // custom 변경될때마다 문서의 제목 업데이트
}

// 페이지 제목 동적으로 설정
// 컴포넌트가 언마운트될때 이전 제목으로 복원