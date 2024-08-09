import React, { Component } from 'react'

export default class LifeCycleClassChild extends Component {
    componentDidMount() {
        console.log('컴포넌트 마운트!! 🔵');   // on 눌렀을때 child 컴포넌트가 생길때 실행
    }
    
    componentDidUpdate() {
        console.log('컴포넌트 업데이트!! 🟢');    // plus 눌렀을때 실행
        
    }
    
    componentWillUnmount() {
        console.log('컴포넌트 언마운트!! 🔴');    // off 눌렀을때 child 컴포넌트가 없어질때 실행

    }
  render() {
    return (
      <div>
        자식 컴포넌트
        <p>현재 Number 값은 {this.props.number} 입니다</p>
      </div>
    )
  }
}
