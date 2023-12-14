import React from 'react'

const Form = ({ data, handleName, handleSubmit, handleMonth, handleYear, handleCvc, isTextValid, handleNumber, isNumberValid, isYearValid, isMonthValid, isCvcValid }) => {
  return (

    <>
      {console.log("jgjkg", data, data.number)}
      <form action="#" id='form' onSubmit={(e) => handleSubmit(e)} >
        <p className='text'>CARDHOLDER NAME</p>

        <input className='input' type="text" name="name" id="" placeholder='e.g. Jane Appleseed' onChange={(e) => handleName(e)} />

        {isTextValid(data.name) ? null : <p className="text3">Please enter a valid name</p>}
        <p className='text'>CARD NUMBER</p>


        <input className='input' type="text" name="" id="" placeholder='e.g. 1234 5678 9123 0000' onChange={(e) => handleNumber(e)} />

        {isNumberValid(data.number) ? null : <p className="text3">Please enter a valid card number</p>}


        <div className='flex'>

          <div className='flex2'>
            <p className='text'>EXP. DATE </p>
            <input className='input2' type="text" name="" id="" placeholder='MM' onChange={(e) => handleMonth(e)} />
            {isMonthValid(data.month) ? null : <p className="text3">(invalid)</p>}
          </div>

          <div className='flex2'>
            <p className='text' id='mmyy'>(MM/YY)</p>
            <input className='input2' type="text" placeholder='YY' onChange={(e) => handleYear(e)} />{isYearValid(data.year) ? null : <p className="text3">(invalid)</p>}
          </div>
          <div className='flex2'>
            <p className='text' id='cvc'>CVC</p>

            <input id='input3' type="text" placeholder='e.g. 123' onChange={(e) => handleCvc(e)} />
            {isCvcValid(data.cvc) ? null : <p className="text3">(invalid)</p>}
          </div>
        </div>









        <div>
          <br />
          <button
            disabled={!isNumberValid(data.number) || !isTextValid(data.name) || !isMonthValid(data.month) || !isYearValid(data.year) || !isCvcValid(data.cvc) ? true : false}
            type="submit" id='btn'>Continue</button>
        </div>
      </form>

    </>
  )
};

export default Form
