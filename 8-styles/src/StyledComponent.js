import React from 'react'
import styled from 'styled-components'
// CSS in js : js 안에 css 작성, 자동으로 고유한 클래스 이름 생성, props를 사용해 동적으로 스타일 변경

const StyledContainer = styled.div`
    display: flex;
`

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor || 'blue'};

    &:hover{
        transform: translateY(-20px);
    }
`

export default function StyledComponent() {
    return (
        <StyledContainer>
            <StyledBox bgColor='red'>1</StyledBox>
            <StyledBox bgColor='orange'>2</StyledBox>
            <StyledBox bgColor='yellow'>3</StyledBox>
            <StyledBox >4</StyledBox>
        </StyledContainer>
    )
}
