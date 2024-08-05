import React, {useState} from 'react'

export const FuncComponent = () => {
    const [num, setNum] = useState(0)

    const increase = () => {
        setNum(num + 1)
    }
    const decrease = () => {
        setNum(num - 2)
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
    </div>
  )
}
