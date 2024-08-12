import React from 'react'
import styles from './styles/cssModule.module.css'

// CSS Module
// 클래스명 중복 방지
export default function CssModuleComponents() {
    console.log('styles//////', styles);   // 새로운 고유 번호 부여
    
  return (
    <div className={styles.container}>
        {/* 두 클래스를 동시에 적용 */}
        {/* 배열의 요소들을 문자열로 합쳐서 클래스명을 한줄로 만들어야 함 */}
        <div className={[styles.box, styles.red].join(' ')}>1</div>
        <div className={[styles.box, styles.orange].join(' ')}>2</div>

        {/* 백틱 사용한 템플릿 리터럴, 두 클래스 함께적용 */}
        {/* 가장 간단, 가독성 좋아서 추천 */}
        <div className={`${styles.box} ${styles.yellow}`}>3</div>
    </div>
  )
}
