// Toolkit 사용
import { createSlice } from '@reduxjs/toolkit'

// 1. 슬라이스 객체 정의
const isVisibleSlice = createSlice({
    name: 'isVisible',   
    initialState: true,
    reducers: {
        changeVisibility: (state) => {
            return !state    // 상태를 직접 변경(immer 라이브러리 내부적으로 사용)
        },
    }
})


export const { changeVisibility } = isVisibleSlice.actions
// createSlice가 자동으로 생성한 액션 생성자를 추출해 내보냄

export default isVisibleSlice.reducer
// createSlice로 생성한 counterSlice 객체는 name, actions, reducer 등을 포함
// counterSlice.reducer 는 createSlice에 의해 자동으로 생성된 리듀서 함수
// 상태 업데이트를 담당함, 핵심 함수이기 때문에 default 로 내보내는것
// 이름에 s를 붙이지 않고 단수형 reducer를 사용하는 이유는 슬라이스에서는 단일 리듀서 함수를 반환하기 때문