import React, { useState } from 'react';

export default function Alphabet() {
    // 배열 ex
    // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a']);

    // 배열 안에는 객체 형태 ex
    const [alphabet, setAlphabet] = useState([
        {
            id: 1,
            alpha: 'a',
        },
        {
            id: 2,
            alpha: 'p',
        },
        {
            id: 3,
            alpha: 'p',
        },
        {
            id: 4,
            alpha: 'l',
        },
        {
            id: 5,
            alpha: 'e',
        },
    ]);

    const [inputAlpha, setInputAlpha] = useState('');

    // 글자 추가.
    const addAlpha = () => {
        // Q. input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
        // if()

        // * concat
        // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.

        // ex)
        // let arr1 = [1,2,3];
        // let arr2 = [5,6,7];
        // let arr3 = arr1.concat(arr2);

        // console.log(arr3); // [1,2,3,5,6,7];
        if(inputAlpha.trim().length !== 0){    // input태그의 값의 양쪽 공백의 길이가 0이면(입력된 값이 없으면)

            const newAlpha = alphabet.concat({
                id: alphabet.length + 1,
                alpha: inputAlpha,
            });
    
            setAlphabet(newAlpha);
            setInputAlpha(''); // 입력 칸 초기화
        }
    };

    // 글자 삭제
    const deleteAlpha = (targetId) => {
        console.log(targetId);   // 삭제될 요소의 id = val.id

        const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId)    // 더블클릭한거의 id가 배열의 id와 똑같지 않은거만 남기자
        setAlphabet(newAlpha)
    }

    // 키보드 이벤트
    const handleKeyDown = (e) => {
        console.log('e.code', e);
        if(e.key === 'Enter'){   // e.keyCode가 13 도 같은 의미
            addAlpha()
        }
    }
    return (
        <div>
            <h1>Map & Filter</h1>
            <ol>
                {/* 배열 ex */}
                {/* return 키워드 x, 중괄호 x */}
                {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))} */}

                {/* 배열 ex */}
                {/* return 키워드 o */}
                {/* {alphabet.map((value, idx) => {
                    return <li key={idx}>{value}</li>;
                })} */}

                {/* 객체 ex */}
                {alphabet.map((value) => (
                    <li key={value.id}>{value.alpha}</li>
                ))}
            </ol>

            {/* 알파벳 추가해보기 */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    console.log(e.target.value);
                    setInputAlpha(e.target.value);    // inputAlpha라는 변수의 상태값이 변할때 실행되는 함수
                }}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <button onClick={addAlpha}>추가</button>

            {/* 알파벳 삭제해보기 */}
            <ol>
                {alphabet.map((val) => (
                    <li key={val.id} onDoubleClick={() => deleteAlpha(val.id)}>
                        {val.alpha}
                    </li>
                ))}
            </ol>
        </div>
    );
}


/**
 * 1. deleteAlpha(val.id)의 의미
 * - deleteAlpha 함수를 즉시 실행하고 그 결과값을 반환한다는 뜻, 반환된 값이 onDoubleClick 에 전달
 * - 삭제 로직일 뿐, 반환값이 없기 때문에 undefined일 확률이 높음
 * - 즉시 실행 : 컴포넌트가 렌더링되는 시점에 deleteAlpha(val.id)가 바로 실행됨, val.id라는 인자를 함수에 전달하면서 함수 실행
 * 
 * 2. () => deleteAlpha(val.id)의 의미
 * - deleteAlpha(val.id) 라는 함수 호출을 나중에 실행하도록 준비해둔 '함수 참조'이다
 * - 나중에 실행 : 컴포넌트가 렌더링될때 이함수는 실행되지 않고 이벤트 발생시 실행, val.id라는 인자가 이벤트 발생시 deleteAlpha 함수에 전달되면서 실행
 * - 필요성 : 인자를 넘겨주는 함수 호출을 연기하기 위해 화살표 함수, 즉 콜백함수 형태로 작성해야 함
 * 
 * 3. deleteAlpha 함수 호출에서 인자 없이 사용하면?
 * - 그냥 deleteAlpha 라고만 작성 가능, 이 경우에도 함수는 참조로서 전달됨, 인자를 넘겨줄 필요가 없으므로 화살표 함수로 감쌀 필요도 없음
 * 
 * ## 요약
 * deleteAlpha(val.id)는 즉시 실행을 의미
 * () => deleteAlpha(val.id) 는 이벤트 발생 시 실행을 의미, 인자를 넘겨줄 때 사용
 * 인자 필요 없으면 그냥 함수 이름(deleteAlpha)만 전달
 */