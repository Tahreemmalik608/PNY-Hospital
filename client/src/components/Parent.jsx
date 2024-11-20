import React, {useState}from 'react'
import Child from './Child'

const Parent = () => {
    const [data,setData]=useState(20)
  return (
    <div>Parent
    <Child data={data}/>
    </div>
  )
}
// aik component se dosre component mien data pass krne ko kehte hien props
export default Parent