import React, { useState } from 'react'

export const AddCategory = () => {


    const [inputValue, setInputValue] = useState('ale')

const onInputChange=()=>{
    setInputValue('hola')
}
  return (
<>
<input type="text" placeholder='Buscar gifs' value={inputValue} onChange={onInputChange}/>
</>
  )
}
