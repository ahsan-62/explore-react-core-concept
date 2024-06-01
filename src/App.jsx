import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Ahsan/>
      <Ahsan2>  </Ahsan2>
      <Developer name="Laravel" salary="10000" ></Developer>
      <Developer name="Node JS" salary="5000" ></Developer>
      <Developer name="Django" salary="9500" ></Developer>
    </>
  )
}



function Ahsan(){
  const ahsan={
    name:"Ahsan",
    age:22
  }
  return(

    <div>
      <h1>Ahsan</h1>
      <h1 className='name-age'>My Name is {ahsan.name} with age {ahsan.age}</h1>
    </div>  
  )
}

function Ahsan2(){
  const array=[1,2,3,4,5,6,7,8,9,10];
  const styleDev={
    color:"red",
    fontSize:"20px",
    fontWeight:"bold",
    fontFamily:"Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
    border:"2px solid black",
    padding:"10px",
    margin:"10px" ,
    borderRadius:"10px"

  }

  return(
    <div style={styleDev}>
      <h1>My Name is {array[1]}</h1>
    </div>  
  )
} 


function Developer(Props){

  const setStyle=Props.salary>5000? {color:"red",fontSize:"20px",fontWeight:"bold",fontFamily:"Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",border:"2px solid black",padding:"10px",margin:"10px" ,borderRadius:"10px"}:{color:"green",fontSize:"20px",fontWeight:"bold",fontFamily:"Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",border:"2px solid black",padding:"10px",margin:"10px" ,borderRadius:"10px"}
  console.log(Props);
  return <h1 style={setStyle} >Expert in :{Props.name} and salary is {Props.salary}</h1>
}





export default App
