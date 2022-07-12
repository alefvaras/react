import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const apiKey = '9MUKydmrQOEkfBWWSPUOYkrka2ORDcjy';

export const GifExpertApp = () => {
  
    const [categories, setcategories] = useState(['dragon ball','hunter x'])
    const onAddCategory=()=>{
    //  setcategories([...categories,'ale']);
    setcategories(cat=>{
    return  [...cat,'ale']
    });
     }
    
    return (
    <>
       <h1>GifExpertApp</h1>
       <AddCategory/>
       <button onClick={onAddCategory}>Agregar</button>
       <ol>
        {categories.map(category => {

          return <li key={category}>{category}</li>
        })}
       </ol>
    </> 
 
  )
}
