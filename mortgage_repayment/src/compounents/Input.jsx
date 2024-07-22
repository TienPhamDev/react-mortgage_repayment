import { useEffect, useState } from "react"

export default function Input({ inputName, value, onChangeValue, error }) {
  const [clickInp,setClickInp] = useState(false)
  useEffect(()=>{
    document.addEventListener("click",(e)=>{
      e.target.id === inputName ? setClickInp(true) : setClickInp(false)
    })
  },[inputName])

  return (<>
    { !error ? <div 
      className="border-red-500 my-2 flex border-2 rounded-md transition duration-300" 
      >
      <span className="text-slate-100 bg-red-500 p-2 font-bold rounded-l transition duration-300">&#163;</span>
      <input 
        type="text"
        value={value}
        id={inputName}
        className='outline-none w-full p-2 rounded-r'
        onClick={() => setClickInp(true)}
        onChange={(e) => {
          onChangeValue(Number(e.target.value))
        }}
      />
      </div>
      
      :
      <div 
      className={
        clickInp ? 'border-lime-400 my-2 flex border-2 rounded-md transition duration-300' : 'my-2 flex border-2 border-slate-400 rounded-md transition duration-300'
      } 
      >
      <span className={
        clickInp ?
        'bg-lime-400 p-2 font-bold rounded-l text-slate-500 transition duration-300'
        :
        'p-2 font-bold bg-slate-300 rounded-l text-slate-500 transition duration-300'
      }>￡</span>
      <input 
        type="text"
        value={value}
        id={inputName}
        className='outline-none w-full p-2 rounded-r'
        onClick={() => setClickInp(true)}
        onChange={(e) => {
          onChangeValue(Number(e.target.value))
        }}
        />
    </div>}
        </>
  )
}