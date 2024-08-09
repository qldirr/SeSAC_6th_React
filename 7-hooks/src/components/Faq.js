import React from 'react'
import useToggle from '../hooks/useToggle'

export default function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle()
    console.log('isFaqOpen======', isFaqOpen);   // false or true
    console.log('setIsFaqOpen======', setIsFaqOpen);   // const toggleVal = () => {setValue(!value)}

    return (
        <div>
            <h1>custom hook (useToggle) ex</h1>
            <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>Q. 리액트에서 커스텀 훅 만들기 가능??</div>
            {isFaqOpen && <div>A. 가능</div>}
        </div>
    )
}
