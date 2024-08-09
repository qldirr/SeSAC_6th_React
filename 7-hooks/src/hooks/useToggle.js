import {useState} from 'react'

// 토글 상태를 관리하고 전환하는 기능

// (initVal = false) 은 파라미터
export default function useToggle(initVal = false) {
    const [value, setValue] = useState(initVal)
    // value - 토글 상태
    // setValue - 토글 상태를 변화시키는 setter

    // 토글 상태 전환(스위칭)
    const toggleVal = () => {
        setValue(!value)
    }

    // 훅의 결과로 반환할 값 정의, 훅의 목적에 맞는 적절한 반환 형식 선택
  return [value, toggleVal]
  // 두가지 값 반환, 현재 상태(value)와 상태를 전환하는 함수(toggleVal)
}

// 커스텀 훅에서는 'props' 라는 개념이 사용되지 않음, 대신 함수의 매개변수를 통해 초기값 설정 가능
// 커스텀 혹은 일반 js 함수로 훅이 호출될때 매개변수로 값 전달 받음
// 이 값들은 훅 내부에서 상태를 초기화 하거나 설정하는데 사용

// ** 훅을 만드는 과정
// 1. 훅의 목적 정의 - 커스텀 훅이 해결하려는 문제나 제공할 기능 정의
// 2. 훅의 기능 설계 - 훅의 어떤 상태와 이펙트를 사용할지 설계
// 3. 훅 구현