import React, { useState } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom'
import Modal from 'react-modal';


function Summary() {

  const fromNavigate = useNavigate();
 const location = useLocation();
 
const showName = location.state.name ;
const rating = location.state.rating ;
const id = location.state.showId;

const NavigateForBookTicket = ()=>{
      fromNavigate("/book-ticket" , {state:{showName : showName, rating : rating , id : id
                                             }})
}
 const NavigatetoHome = () =>{
  fromNavigate("/")
 }


  return (
    <div className='summary-main-div'>
    {/* <h1>{location.state.id}</h1> */}
        <div className='summary-box'> 
           <img src={location.state.image}/>
           <h3 style={{padding:"3px"}}><span>Name: </span>{location.state.name}</h3>
        </div>
        <div className='summary-box-detail'>
        <h3><span>Show Name: </span>{showName}</h3>
        <h3><span>Rating : </span><span style={{color: "green"}}>{location.state.rating} </span></h3>
        <h2><span>Summary :</span></h2> 
        <h3>{location.state.summary}</h3>
        </div>
        <div  className='btn-book-ticket'>
              <button onClick={NavigateForBookTicket}>BOOK TICKET</button>
              <button onClick={NavigatetoHome}>Back To Home Page</button>
        </div>
           
    </div>
  ) 
}

export default Summary