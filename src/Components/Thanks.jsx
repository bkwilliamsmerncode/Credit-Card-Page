import React from 'react'
import check from '../images/check.svg'




const Thanks = ({ handleConfirm }) => {



  return (
    <>
      <div className='flex4' id='main2'>
        <img src={check} alt="checkmark" id='img2' />
        <h3 id='header'>THANK YOU!</h3>
        <p className='text'>We've added your card details</p>
        <br />
        <button type="submit" id='btn' onClick={(e) => handleConfirm(e)}>Confirm</button>
      </div>

    </>
  )
};

export default Thanks
