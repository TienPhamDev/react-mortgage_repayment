import Input from './compounents/Input';
import SmallInput from './compounents/SmallInput';
import { RadioInput } from './compounents/RadioInput';
import { Label } from './compounents/Label';

export function MortgageCalculator({
  handleSubmit, onClickClearAll, amount, setAmount, term, setTerm, interest, setInterest, mortgageType, setMortgageType, error
}) {

  return (
    <div className='bg-slate-50 p-8 lg:rounded-l-[25px] md:rounded-t-lg'>
      <form>
        <div className='flex justify-between'>
          <h1 className='font-bold text-2xl text-slate-800'>
            Mortgage Calculator
          </h1>
          <button onClick={(e) => onClickClearAll(e)} className='underline decoration-dotted text-sm font-light text-slate-500 underline-offset-2'>
            clear all
          </button>
        </div>
        <Label htmlFor="Amount">
          Mortgage Amount
        </Label>
        <Input inputName="Amount" value={amount} onChangeValue={setAmount} error={error} />
        {error || <p className='text-red-500 font-bold text-sm'>This field is required</p>}
        <div className='md:flex justify-between gap-6'>
          <div>
            <Label htmlFor="Term">
              Mortgage Term
            </Label>
            <SmallInput inputName="Term" spanText="Years" value={term} error={error} onChangeValue={setTerm} />
            {error || <p className='text-red-500 font-bold text-sm'>This field is required</p>}
          </div>

          <div>
            <Label htmlFor="Interest">
              Interest Rate
            </Label>
            <SmallInput inputName="Interest" spanText="%" value={interest} error={error} onChangeValue={setInterest} />
            {error || <p className='text-red-500 font-bold text-sm'>This field is required</p>}
          </div>
        </div>
        <h3 className='text-sm text-slate-500'>
          Mortgage Type
        </h3>
        <RadioInput radioName="Repayment" group="MortgageType" value={mortgageType} onChangeValue={setMortgageType} />
        <RadioInput radioName="Interest Only" group="MortgageType" value={mortgageType} onChangeValue={setMortgageType} />
        {mortgageType === "" && !error ? <p className='text-red-500 font-bold text-sm'>This field is required</p> : null}
        <button id='btnForm' onClick={(e) => handleSubmit(e)} className='flex gap-4 p-4 bg-lime-400 my-6 rounded-full font-bold hover:bg-lime-300  transition duration-300 '>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z" /></svg>
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}
