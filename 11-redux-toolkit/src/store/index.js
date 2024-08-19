// Toolkit 사용

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import isVisibleReducer from './isVisibleSlice'

// 2. Store 생성
// - configureStore 를 사용해 스토어 생성
// configureStore : Redux Toolkit 에서 제공하는 함수로 스토어를 더 쉽게 설정할 수 있게 해줌
const store = configureStore({
    reducer: {
        counter: counterReducer,
        isVisible: isVisibleReducer
    }
})

export default store