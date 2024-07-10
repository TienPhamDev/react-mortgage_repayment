import { useEffect, useState } from 'react'
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
  const [amount,setAmount] = useState(0)
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
          <Label htmlFor="Amount">
            Mortgage Amount
          </Label>
          <Input inputName="Amount"/>
          <div className='flex justify-between gap-6'>
            <div>
            <Label htmlFor="Term">
              Mortgage Term
            </Label>
            <SmallInput inputName="Term" spanText="Years"/>
            </div>
            <div>
            <Label htmlFor="Interest">
              Interest Rate
            </Label>
            <SmallInput inputName="Interest" spanText="%"/>
            </div>
          </div>
        </form>
      </div>
  )
}
function Label({children,htmlFor}){
  return <label 
          htmlFor={htmlFor}
          className='text-sm text-slate-300'
        >
          {children}
        </label>
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
        clickInp ? 'border-lime-400 my-2 flex border-2 rounded-md' : 'my-2 flex border-2 border-slate-400 rounded-md'
      } 
    >
      <span className={
        clickInp ?
        'bg-lime-400 p-2 font-bold rounded-l'
        :
        'p-2 font-bold bg-slate-300 rounded-l'
      }>￡</span>
      <input 
        type="text" 
        id={inputName}
        className='outline-none w-full p-2 rounded-r'
        onClick={() => setClickInp(true)}
      />
    </div>
  )
}
function SmallInput({inputName,spanText}){
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
      <input 
        type="text" 
        id={inputName}
        className='outline-none w-full p-2'
        onClick={() => setClickInp(true)}
      />
      <span className={
        clickInp ?
        'bg-lime-400 p-2 font-bold w-24 text-center'
        :
        'p-2 font-bold bg-slate-300 w-24 text-center'
      }>{spanText}</span>
    </div>
  )
}

export default App
