import React from 'react'
import '../App.css'
import Input from '../Compoments/Input'
import Title from '../Compoments/Title'

export default function Login() {

  const customStyle = {
    fontSize: '20px',
    background: 'black',
    color: 'white',
    margin: '2rem',
    padding: '4rem'
  }

  return (
    <div>
      <Title classes={"title"} text={"login page"} />
      <hr />
      <div style={customStyle}>
        <label
          style={{ fontSize: '20px' }}
        >
          <Title classes={"label-text"} text={"Username:"} />
        </label>

        <Input
          type={"text"}
          placeholder={"enter your name"}
        />

        <Input
          type={"date"}
          placeholder={" "}
        />



      </div>
    </div>
  )
}