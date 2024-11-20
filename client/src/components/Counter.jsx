import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/counter.slice'

const Counter = () => {
    const counterr=useSelector((state)=>state.counter?.value)
    const dispatch=useDispatch();

    
  return (
    <div>
 <button onClick={()=>dispatch(decrement())}>-</button>
 <h1>{counterr}</h1>
 <button onClick={()=>dispatch(increment())}>+</button>     
    </div>
  )
}

export default Counter
