import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <Main/>
  )
}

function Main(){
  return (
    <div className='grid grid-cols-2 w-3/4 mx-auto my-28'>
      <MortgageCalculator/> 
      <div className='bg-blue-500'>col2</div>
    </div>
  )
}
function MortgageCalculator(){
  const [amount,setAmount] = useState(0)
  return (
      <div className='bg-slate-50 p-8'>
        <form>
          <div className='flex justify-between'>
            <h1 className='font-bold text-lg text-slate-800'>
              Mortgage Calculator
            </h1>
            <button className='underline decoration-dotted text-sm font-light text-slate-500 underline-offset-2'>
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
          <h3 className='text-sm text-slate-500'>
            Mortgage Type
          </h3>
          <RadioInput radioName="Repayment"/>
          <RadioInput radioName="Interest Only"/>
          <button className='flex gap-4 p-4 bg-lime-400 my-6 rounded-full font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg> 
            Calculate Repayments
          </button>
        </form>
      </div>
  )
}
function Button(){
  return <button>Calculate Repayment</button>
}
function Label({children,htmlFor}){
  return <label 
          htmlFor={htmlFor}
          className='text-sm text-slate-500'
        >
          {children}
        </label>
}
function RadioInput({radioName}){
  return <div className="border-2 border-slate-400 p-2 my-2 rounded-md">
    <input type="radio" id={radioName} value={radioName} className='accent-lime-300'/>
    <label htmlFor={radioName}> {radioName}</label>
  </div>
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
        'bg-lime-400 p-2 font-bold rounded-l text-slate-500'
        :
        'p-2 font-bold bg-slate-300 rounded-l text-slate-500'
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
        clickInp ? 
        'border-lime-400 my-2 flex border-2 rounded-md' 
        : 
        'my-2 flex border-2 border-slate-400 rounded-md'
      } 
    >
      <input 
        type="text" 
        id={inputName}
        className='outline-none w-full p-2 rounded-l'
        onClick={() => setClickInp(true)}
      />
      <span className={
        clickInp ?
        'bg-lime-400 p-2 font-bold w-24 text-center rounded-r text-slate-500'
        :
        'p-2 font-bold bg-slate-300 w-24 text-center rounded-r text-slate-500'
      }>{spanText}</span>
    </div>
  )
}

export default App
