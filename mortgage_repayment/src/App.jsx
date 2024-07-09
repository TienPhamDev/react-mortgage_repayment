import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Main/>
    
  )
}
function Main(){
  return (
    <div className='grid grid-cols-2 w-3/4 mx-auto mt-28'>
      <MortgageCalculator/> 
      <div className='bg-blue-500'>col2</div>
    </div>
  )
}
function MortgageCalculator(){
  return (
      <div className='bg-red-500 p-8'>
        <form >
          <div className='flex justify-between'>
            <h1 className='font-bold text-lg text-slate-900'>
              Mortgage Calculator
            </h1>
            <button className='underline decoration-dotted text-sm font-light text-slate-300 underline-offset-2'>
              clear all
            </button>
          </div>
          <label 
            htmlFor="Amount"
            className='text-sm text-slate-300'
          >
            Mortgage Amount
          </label>
          <Input inputName="Amount"/>
        </form>
      </div>
  )
}
function Input({inputName}){
  const [clickInp,setClickInp] = useState(false)
  useEffect(()=>{
    document.addEventListener("click",(e)=>{
      e.target.id === inputName ? setClickInp(true) : setClickInp(false)
    })
  },[])
  return (
    <div 
      className={
        clickInp ? 'border-lime-400 my-2 flex border-2' : 'my-2 flex border-2 border-slate-400'
      } 
      >
      <span className={
        clickInp ?
        'bg-lime-400 p-2 font-bold'
        :
        'p-2 font-bold bg-slate-300'
      }>￡</span>
      <input 
        type="number" 
        id={inputName}
        className='outline-none w-full p-2'
        onClick={() => setClickInp(true)}
      />
    </div>
  )
}
export default App
