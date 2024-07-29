// 함수형 컴포넌트
// 직관적으로 함수 이름 만들고 보여줄 html 요소 retrun 문에 작성
// 화살표 함수, 함수 선언문 형태 둘다 작성 가능
// import PropTypes from 'prop-types'

const FunctionComponent = (props) => {
    console.log('function props>>', props);    // props를 파라미터로 받음
    const teacher = 'Damon'
    const {name} = props   // 구조분해 할당

    return (
        <>
            <h1>Hi~ {teacher}</h1>
            <p>여기는 Functional Component!!</p>
            {/* props 사용 */}
            {/* <p>
                새로운 컴포넌트의 이름은 <b>{props.name}</b>
            </p> */}
            <p>
                새로운 컴포넌트의 이름은 <b>{name}</b>
            </p>
        </>
    )
}


// defaultProps : 부모 컴포넌트에서 props 를 미전달시 기본 값을 보여줄 props
// FunctionComponent.defaultProps = {
//     name:'야호'
// }


// propsTypes : 컴포넌트의 필수 props를 지정 or props 타입을 지정할 때 사용
// TypeScript 가 아닌 javascript 의 유연한 특성 때문에 문제가 생길 수 있기 때문에 해결하기 위해 권장
// default 가 없어야 isRequired 가 작동을 함
FunctionComponent.propTypes = {
    // 프로퍼티의 자료형을 객체 형태로 지정해 FunctionComponent.propTypes에 저장
    // name:PropTypes.string.isRequired
    // string 타입이자 필수값으로 지정
    // props 가 반드시 제공되어야 함
}


export default FunctionComponent;

// TMI
// 리액트 18부터 React.StrictMode가 기본적으로 활성화
// 개발 모드에서 컴포넌트의 렌더링과 라이프사이클(생명주기)가 두번 호출
// 부작용을 테스트 하거나 식별하는데 도움을 줌
// -> console.log가 두번 짹힐 수 있음