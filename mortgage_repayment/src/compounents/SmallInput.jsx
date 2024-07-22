import { useState } from "react"
import { useEffect } from "react"
export default function SmallInput({ inputName, spanText, value, onChangeValue, error }) {
  const [clickInp,setClickInp] = useState(false)
  useEffect(()=>{
    document.addEventListener("click",(e)=>{
      e.target.id === inputName ? setClickInp(true) : setClickInp(false)
    })
  },[inputName])
  return <>
    { !error ? <div 
      className="border-red-500 my-2 flex border-2 rounded-md transition duration-300" 
    >
      <input 
        type="text" 
        id={inputName}
        className='outline-none w-full p-2 rounded-l'
        value={value}
        onClick={() => setClickInp(true)}
        onChange={(e) => onChangeValue(Number(e.target.value))}
      />
      <span className="bg-red-500 p-2 font-bold w-24 text-center rounded-r text-slate-100 transition duration-300"x>{spanText}</span>
      </div > 
      :
      < div 
      className={
        clickInp ? 
        'border-lime-400 my-2 flex border-2 rounded-md transition duration-300' 
        : 
        'my-2 flex border-2 border-slate-400 rounded-md transition duration-300'
      } 
    >
      <input 
        type="text" 
        id={inputName}
        className='outline-none w-full p-2 rounded-l'
        value={value}
        onClick={() => setClickInp(true)}
        onChange={(e) => onChangeValue(Number(e.target.value))}
      />
      <span className={
        clickInp ?
        'bg-lime-400 p-2 font-bold w-24 text-center rounded-r text-slate-500 transition duration-300'
        :
        'p-2 font-bold bg-slate-300 w-24 text-center rounded-r text-slate-500 transition duration-300'
      }>{spanText}</span>
    </div>}
    </>
}