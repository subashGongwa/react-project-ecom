import React from 'react'

export default function Input({type,placeholder,classes, value=null}) {
  return (
    <input 
    type={type} 
    placeholder={placeholder}
    className={classes}
    value={value} />
    
  )
}
