import React, {useState} from 'react'
//import styled from 'styled-components'
import { Button, Button2, Button3 } from "./Components/Button.style"
import { Body } from './Components/Body.style'
import { H1, H1two } from './Components/H1.style'
//import img from './Components/img/num.jpg'




const StateTutorial = () => {
    const [counter, setCounter] = useState(0)
    
     const addStuff = () => {
        setCounter (counter + 1)
     }

     const resets = () => {
        setCounter(0)}
        
     
     const X2 = () => {
      setCounter (counter * 2)
      
   }

   const X4 = () => {
      setCounter (counter * 4)
      
   }

   const X6 = () => {
      setCounter (counter * 6)
      
   }

   const X8 = () => {
      setCounter (counter * 8)
      
   }

   const X10 = () => {
      setCounter (counter * 10)
      
   }

   const X100 = () => {
      setCounter (counter * 100)
      
   }


   
   const Sub = () => {
      setCounter (counter - 1)
      
   }

    return (
    
    <div>
       <Body>
   
          
           <Button onClick={addStuff}> Add</Button>
           <Button2 onClick={Sub}> Subtract</Button2>
           <Button3 onClick={X2}> X2</Button3>
           <Button onClick={X4}> X4</Button>
           <Button2 onClick={X6}> X6</Button2>
           <H1>The Count</H1>
           <Button3 onClick={X8}> X8</Button3>
           <Button onClick={X10}> X10</Button>
           <Button2 onClick={X100}> X100</Button2>
           <Button3 onClick={resets}> Reset</Button3>
           <H1two>{counter}</H1two>
            
           </Body>
        </div>
       
        
    )
}

export default StateTutorial