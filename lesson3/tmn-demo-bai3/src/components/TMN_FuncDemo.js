import React from 'react'

export default function TMN_FuncDemo(props) {
  return (
    <div>
        <hr/>
        <h2>Function Components Demo</h2>
        <h3>Su dung thuoc tinh tu props</h3>
        <p>UserName: {props.userName}</p>
        <p>FullName: {props.fullName}</p>
        <p>Age: {props.age}</p>
    </div>
  )
}
