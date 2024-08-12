import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {

    const { register,    // input 할당, value 변경 감지
        handleSubmit,    // form submit 시 호출
        formState: { errors },   // 폼 상태 객체
        watch   // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm()

    // handleSubmit(func A [, func B]) - 두개의 함수를 파라미터로 가짐
    // func A - 필수, 유효할 때 실행
    // func B - 선택, 유효하지 않을때 실행

    // func A
    const onValid = (data) => {
        console.log('onValid`~~~~', data);    // {username: 'ghjhhhhoio'}

    }

    // func B
    const onInvalid = (err) => {
        console.log('onInvalid~~~~~~~~', err);

    }

    console.log('errors ====', errors);
    console.log('watch ====', watch('username'));

    return (
        <div>
            <h1>react hook form 라이브러리 데모</h1>
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <input type="text" placeholder='username'
                    // register 함수(필드명, 유효성 검새 객체)
                    {...register('username', {
                        required: '이름은 필수 항목',
                        minLength: {
                            message: '이름은 최소 2글자 이상',
                            value: 2
                        }
                    })}
                // 'username'이라는 필드명 / required, minlength 라는 유효성 검사 규칙
                // 즉 'username'이라는 input 필드를 react hook form 에 등록
                />
                {/* 이 표현은 조건부 렌더링과 옵셔널 체이닝을 활용해 폼 필드의 오류 메세지 표시 방법 */}
                {/* errors - formState 객체 중 하나, 각 폼 필드에 대한 오류 메세지를 담고 유효성 검사가 실패한 경우에만 해당 필드에 오류 메세지 저장 */}
                {/* 옵셔널 체이닝 연산자 '?.' - js에서 객체의 속성에 접근 시 해당 속성이 존재하는지 확인하고 없을 경우 undefined 반환 */}
                {errors.username?.message}
                <br />
                <input type="email" placeholder='email(gmail)'
                    {...register('email', {
                        required: '이메일 입력',
                        validate: {
                            useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입 가능'
                        },
                        // 정규표현식
                        // pattern:{
                        //     value: '', 
                        //     message:'유효한 이메일 주소 입력'
                        // }
                    })}
                />
                {/* validate */}
                {/* React Hook Form 에서 제공하는 유효성 검사 옵션 중 하나, 폼 필드에 대해 커스텀 유효성 검사 수행, 함수 or 함수를 포함하는 객체를 받을 수 있음 */}
                {/* validate 가 객체로 사용될 경우 객체의 각 속성에 대해 개별적 유효성 검사 수행 가능, 각 속성은 함수 형태로 정의되고 이 함수들이 개별적인 유효성 검사 규칙 적용 */}

                {/* useGmail - validate 옵션의 객체 내부에서 useGmail이라는 이름의 함수로 정의하고 특정 유효성 검사 규칙 설정 */}
                {/* v - 사용자가 email 필드에 입력한 값(이메일 주소) */}
                {errors.email?.message}
                <br />

                <input type="password" placeholder='password'
                    {...register('password')}
                />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


// React Hook Form 은 주로 언컨트롤드 컴포넌트 사용(컨트롤드, 언컨트롤드)
// 폼 필드가 업데이트 될때마다 전체 폼이 리렌더링되지 않도록 -> 최적화
// 필요할때만 폼 필드의 상태를 업데이트하여 불필요한 렌더링을 줄이고 결과적으로 앱의 성능 향상

// 일반 폼 작성 VS React Hook Form 라이브러리 차이
// 일반 폼 - 각 입력 필드의 상태를 useState로 관리, 모든 입력값의 상태 관리하고 값이 바뀔때마다 전체 컴포넌트가 리렌더링될 수 있음
    // 검증 로직 직접 작성, 폼 제출 시 각 입력 필드 상태들을 모아서 폼 데이터 수집해야함
    // 간단한 폼 양식 작성 시 사용

// React Hook Form 라이브러리 - 코드의 간결화, 비제어 컴포넌트 / 필요한 경우에만 리렌더링, 다양한 검증로직 쉽게 설정
    // 'handleSubmit' 이 함수로 모든 폼 데이터 쉽게 관리, 복잡하고 대규모 폼 양식 작성 시 사용


// Q) why??  ...을 사용하는지
// React 컴포넌트에서 ... 연산자는 객체나 배열을 펼쳐서 각각의 요소나 속성을 개별적인 prop으로 전달할 때 사용됨
// 이 문법을 사용하면 코드가 간결해지고 여러개의 props를 한번에 전달 가능


/**
 * Props
 * - 컴포넌트에 전달되는 입력값
 * - 부모 컴포넌트가 자식 컴포넌트에 데이터 전달 시 사용
 * - 이 props를 통해 컴포넌트의 동작이나 출력 결정
 */
// React에서는 객체의 속성을 컴포넌트의 props로 전달할 때, 각 속성을 개별적으로 전달 가능
// const person = {
//     name:'kim',
//     hobby:'game'
// }

// 직접 전달
{/* <MyComponent name={person.name} hobby={person.hobby}/> */}
// 스프레드 연산자 사용
{/* <MyComponent {...person}/> */}

/**
 * register 함수는 입력 필드를 폼 상태에 등록하고 제어하는데 필요한 여러 속성을 포함하는 객체 반환
 * 반환하는 객체를 input 컴포넌트에 전달하기 위해 스프레드 연산자 사용
 */