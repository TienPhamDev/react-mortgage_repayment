export function RadioInput({ radioName, group, onChangeValue }) {
  const styleDiv = "has-[:checked]:border-lime-400 font-semibold w-full py-2 flex items-center gap-2 border-2 my-2 rounded-md border-slate-400 hover:border-lime-400 transition duration-300";

  return <label htmlFor={radioName} className={styleDiv}>
    <input
      type="radio"
      name={group}
      value={radioName}
      id={radioName}
      onChange={(e) => onChangeValue(e.target.value)} />{radioName}</label>;

}
