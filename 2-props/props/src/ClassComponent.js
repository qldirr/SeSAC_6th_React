// render() 함수 필수
// return 에 실제로 보여주고 싶은 html 요소 작성
import React from 'react'
// 여기서 React 는 Component 를 import 하기 위해 필요, 상속에 사용

// import {Component} from 'react'    // 그냥 Component만 import

import PropTypes from 'prop-types'

class ClassComponent extends React.Component {
    // class ClassComponent extends Component{}
    student = '홍길동'   // 클래스 인스턴스 속성, 키워드(let, const, var) 없이 정의, 클래스 메서드 내 어디서든 this.키워드로 접근 가능

    // 클래스형 컴포넌트는 render 함수 필수
    render() {
        const teacher = 'Damon'     // render 메서드 내부 지역변수
        console.log('props--', this.props);    // 부모 컴포넌트로 부터 받아온 props를 tthis.props로 접근 가능(객체), name:"SeSAC 6th"
        const {name} = this.props     // 구조분해 할당

        return (
            <>
                <h1>Hello, {teacher}</h1>
                <h1>Hi, {this.student}</h1>
                <p>여기는 Class Component</p>
                {/* props 사용 */}
                {/* <p>
                    이름은 <b>{this.props.name}</b> 
                </p> */}
                <p>
                    이름은 <b>{name}</b> 
                </p>
            </>
        )
    }

    static defaultProps = {
        name: '길동이'
    }

    static propTypes = {
        name: PropTypes.string
    }
}


// ClassComponent.defaultProps = {
//     name:'기본 이름'
// }

// ClassComponent.propTypes = {
    // 프로퍼티의 자료형을 객체 형태로 지정해 FunctionComponent.propTypes에 저장
    // name:PropTypes.string
    // string 타입이자 필수값으로 지정
    // props 가 반드시 제공되어야 함
// }

export default ClassComponent;

// props 작성법

// 부모가 자식한테 줄거(자식-> 부모는 안됨, 형제도 안됨)
// 1. 부모 쪽에 <Function 작명={전달할 내용}/>
// 2. 자식 쪽에 Function(props) {
//     <h1>props.작명</h1>
// }   -> 함수형 컴포넌트 작성 방식