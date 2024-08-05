import React, { Component } from 'react'

export default class ClassBind extends Component {
    constructor(props){
        // 클래스형 컴포넌트의 생성자 메서드, 컴포넌트가 처음 생성될 때 호출ㄹ
        super(props)

        console.log('constructor this : ', this);   // 생성자 내에서 this가 무엇을 가르키는지 출력
        this.state = {
            name:'sesac'
        }
        // 1. 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
        /**
         * 'bind' 메서드로 'this' 바인딩
         * Q) 바인딩(binding)??? 
         * - 프로그램의 어떤 기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정짓는 것
         * - js에서 'this'가 무엇을 가르키는지 명확하게 해주기 위해 바인딩 필요
         * - => 'this'가 올바른 객체를 가리키도록 설정하는 작업
         */

        // #1. 생성자에서 바인딩하기
        this.printConsole = this.printConsole.bind(this)
    }
    // bind 사용하기
    printConsole(){
        console.log('printConsole - this :', this);   // 컴포넌트 인스턴스 가리킴(클래스 컴포넌트 자체, ClassBind)
        console.log('printConsole - state :', this.state);   // 컴포넌트의 상태 출력(name:'sesac')
        console.log('-------------------------------------------------------');   
    }
    
    // 2. 화살표 함수에서 이벤트 사용 - 화살표 함수 사용
    /**
     * 화살표 함수는 'this'가 상위 스코프의 'this'를 참조하므로 바인딩 필요 없음(=Lexical Scoping)
     * (자신만의 this를 가지지 않음)
    */
   // evt : 이벤트 객체 / msg, msg2 : 추가로 전달된 인자
    printConsole2 = (evt, msg, msg2) => {
        console.log('evt >>>', evt);   
        console.log('evt.target >>>', evt.target);   
        console.log('evt.currentTarget >>>', evt.currentTarget);   
        console.log('msg >>>', msg);   
        console.log('msg2 >>>', msg2);   
        console.log('this :', this);  // 클래스 인스턴스
        console.log('-------------------------------------------------------');   
    }
    render() {
        return (
            <div>
                <h1>Class Component Event</h1>
                {/* 인자 없이 호출 */}
                <button onClick={this.printConsole}>printConsole(parameter X)</button>

                {/* 이벤트 객체와 인자 전달 */}
                <button onClick={(e) => this.printConsole2(e, 'msg', 'msg2')}>printConsole2(parameter O)</button>

                {/* 이벤트 객체만 전달, 이벤트 객체 제외 보내지 않은 변수는 'undefind' */}
                <button onClick={this.printConsole2}>printConsole2(parameter X)</button>
            </div>
        )
    }
}
