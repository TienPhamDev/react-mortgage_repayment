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
        <form>
          <div className='flex justify-between'>
            <h1 className='font-bold text-lg text-slate-900'>
              Mortgage Calculator
            </h1>
            <button className='underline decoration-dotted text-sm font-light text-slate-300 underline-offset-2'>
              clear all
            </button>
          </div>
          <label 
            htmlFor='Amount'
            className='text-sm text-slate-300'
          >
            Mortgage Amount
          </label>
          <Input />
        </form>
      </div>
  )
}
function Input(){
  const [clickAmoutInp,setClickAmountInp] = useState(false)
  useEffect(()=>{
    document.addEventListener("click",(e)=>{
      e.target.id === "inputEl" ? setClickAmountInp(true) : setClickAmountInp(false)
    })
  },[])
  
  return (
    <div 
      className={
        clickAmoutInp ? 
        'border-lime-300 my-2 flex border border-slate-300' 
        :
        'my-2 flex border border-slate-300'
      } 
      >
      <span className={
        clickAmoutInp ?
        'bg-lime-300 p-2 font-bold bg-slate-300'
        :
        'p-2 font-bold bg-slate-300'
      }>￡</span>
      <input 
        type="text" 
        name="Amount"
        id='inputEl'
        className='outline-none w-full p-2'
        onPointerDown={() => setClickAmountInp(true)}
      />
    </div>
  )
}
export default App
