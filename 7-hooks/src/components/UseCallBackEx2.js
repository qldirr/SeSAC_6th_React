import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'

export default function UseCallBackEx2({ postId }) {
    const [post, setPost] = useState({})

    // [before]
    // const getPost = async() => {
    //     console.log('data fetching...');
    //     // 데이터 요청
    //     const res = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     )
    //     setPost(res.data)

    // }

    // [after]
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 postId가 변경되지 않는 한 컴포넌트는 리렌더링되지 않음
    // -> 필요한 순간에만 api 요청을 날림
    const getPost = useCallback(async () => {
        console.log('data fetching...');
        // 데이터 요청
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        )
        setPost(res.data)
    }, [postId])

    // mount 될때 실행, useEffect 의존성 배열에 함수를 넣음
    // 컴포넌트가 리렌더링 -> 함수 재생성(주소값 변경) -> getPost 재호출
    useEffect(() => {
        getPost()
    }, [getPost])
    return (
        <div>
            <h1>UseCallBackEx2</h1>
            {post.id ? post.title : '로딩중.....'}
            <br />
        </div>
    )
}
