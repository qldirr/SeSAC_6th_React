import React, { Component } from 'react'
import LifeCycleClassChild from './LifeCycleClassChild'

export default class LifeCycleClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            number:0,
            visible:true
        }
    }

    changeNumberState = () => this.setState({number:this.state.number + 1})
    changeVisibleState = () => this.setState({visible:!this.state.visible})
  render() {
    return (
    <>
        <button onClick={this.changeNumberState}>Plus</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {
            this.state.visible && (<LifeCycleClassChild number={this.state.number} />)
        }
        {/* 단축평가 test 
            true && anything  -> anything
            false && anything -> false
            true || anything -> true
            false || anything -> anything
        */}
    </>
    )
  }
}

// 단축 평가

// 논리 연산자(&&, ||)를 사용하여 피연산자를 평가할 때, 결과가 확정되면 나머지 과정을 생략하는 것을 의미합니다.
// 단축 평가 규칙:
// true || anything = true
// false || anything = anything
// true && anything = anything
// false && anything = false
// 단축 평가를 사용하여 if문을 대체할 수 있습니다. 예) message = done && '완료', message = done || '미완료'
// 단축 평가는 객체의 null/undefined 확인 및 프로퍼티 참조에 유용하게 사용됩니다.
// 논리 연산자를 이용한 단축 평가
// && 연산자: 두 피연산자가 모두 true일 때 true를 반환하며, 첫 번째 피연산자가 false이면 두 번째 피연산자를 반환합니다.
// || 연산자: 두 피연산자 중 하나만 true여도 true를 반환하며, 첫 번째 피연산자가 true이면 첫 번째 피연산자를 반환합니다.
// if문 대체하기
// 단축 평가를 통해 if문을 간단히 대체할 수 있습니다. 예) message = done && '완료', message = done || '미완료'
// 객체 속성 접근 시 null/undefined 확인
// 객체 속성에 접근할 때 해당 객체가 null 또는 undefined인지 확인하는 방법으로 단축 평가를 사용할 수 있습니다.
// 함수 매개변수 기본값 설정
// 함수 매개변수에 기본값을 설정할 때 단축 평가를 활용할 수 있습니다.
// 옵셔널 체이닝 연산자
// 객체 속성에 접근할 때 null/undefined 확인을 간단히 할 수 있는 옵셔널 체이닝 연산자(?.)를 사용할 수 있습니다.
