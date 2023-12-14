import React, { useState } from 'react'
import './App.css';
import Thanks from './Components/Thanks'
import Form from './Components/Form'
import logo from './images/logo.svg'



function Dashboard() {

  const [data, setData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: ""
  })

  const [didSubmit, setDidSubmit] = useState(false)

  const handleConfirm = (e) => {
    e.preventDefault()
    setDidSubmit(false)
    setData({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: ""
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setDidSubmit(!didSubmit)
  }

  const handleName = (e) => {
    e.preventDefault()
    console.log(e)
    setData(prev => ({
      ...prev,
      name: e.target.value
    }))
  }

  const handleNumber = (e) => {
    e.preventDefault()
    setData(prev => ({
      ...prev,
      number: e.target.value
    }))
  }

  const handleMonth = (e) => {
    e.preventDefault()
    setData(prev => ({
      ...prev,
      month: e.target.value
    }))
  }

  const handleYear = (e) => {
    e.preventDefault()
    setData(prev => ({
      ...prev,
      year: e.target.value
    }))
  }

  const handleCvc = (e) => {
    e.preventDefault()
    setData(prev => ({
      ...prev,
      cvc: e.target.value
    }))
  }

  const isTextValid = (data) => {

    if (data.length > 2 && data.length < 25) {
      return true
    } else {
      return false
    }
  }

  const isNumberValid = (data) => {
    console.log("num valid", data)
    let reg = /\d{4}[\s]?\d{4}[\s]?\d{4}[\s]?\d{4}/g
    return reg.test(data)
  }

  const isMonthValid = (data) => {
    let reg = /(01|02|03|04|05|06|07|08|09|10|11|12)/g
    // let puzzle = /[A-z]/g
    return reg.test(data)
  }

  const isYearValid = (data) => {
    let reg = /^\d{2}$/g
    return reg.test(data)
  }

  const isCvcValid = (data) => {
    let reg = /^\d{3}$/g
    return reg.test(data)

  }


let ccnum = data.number.slice(0, 4) + " " + data.number.slice(4, 8)  + " " + data.number.slice(8, 12)  + " " + data.number.slice(12, 16)

let ccmonthyear = data.month + "/" + data.year

  return (
    <>
    <div id='main-body'>
      {console.log("txt1",data)}
      <div id="main">
        <div id='left'>


         <div id='ccfront'>
<img src={logo} alt="logo" id='logo'/>
<div id='ccnumber'>
  <p>{ccnum}</p>
</div>
<div className='flex'>
  <div id='name'><p className='text4'>{data.name}</p></div>
  <div id='monthyear'><p className='text4'>{ccmonthyear}</p></div>
  
</div>
         </div>
          <br />
          <div id='ccback' className='flex2'>
            <div id='cvcback'><p className='text4'>{data.cvc}</p></div>
          </div>



        </div>



        <div id='right'>
          {didSubmit ? <Thanks handleConfirm={handleConfirm} /> : <Form data={data} handleSubmit={handleSubmit} handleName={handleName} handleMonth={handleMonth} handleYear={handleYear} handleCvc={handleCvc} isTextValid={isTextValid} isNumberValid={isNumberValid} handleNumber={handleNumber} isMonthValid={isMonthValid} isYearValid={isYearValid} isCvcValid={isCvcValid} handleConfirm={handleConfirm}/>}

        </div>


      </div>
</div>
    </>
  );
}

export default Dashboard;
