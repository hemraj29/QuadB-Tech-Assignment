import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';




function FromForTicketBoiking() {

      const[data,setdata] = useState(true);
      const DefaultValue = useLocation();
      const name = DefaultValue.state.showName;
      const id__show = DefaultValue.state.id;

     const[email ,setEmail] = useState("");
     const[password, setPassword] = useState("");
   const[showname, setShowname] = useState(name);
     const[showid, setshowId] = useState(id__show);
     const[userAge, setUserAge] = useState("");


     function handler(){
          localStorage.setItem("email",email)
          localStorage.setItem("password",password)
          localStorage.setItem("Age",userAge)
         localStorage.setItem("ID",showid)
         localStorage.setItem("Show-Name",showname)

         setdata(false);
         

     }



  return (
     <div className='Form_box-ticket-booking'>
    
        <form action=''>
        <div className='from-field-container'>
         <div id='user-detail-box'>
         

      
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email'  onChange={(e)=>setEmail(e.target.value)}/>


            <label htmlFor='age'> Age</label>
           <input type='number' id='age' onChange={(e)=>setUserAge(e.target.value)}/>


            <label htmlFor='password' >Password</label>
            <input type='text' name='password' id='password' onChange={(e)=>setPassword(e.target.value)} />
           
         
             <label htmlFor='show' >show-Rating:</label>
             <input type='text' id='show' value={DefaultValue.state.rating}/>

             <label htmlFor='shows' > Show name:</label>
             <input  type='text' id='shows' value={DefaultValue.state.showName}/>

              <label htmlFor='shows' > Show-ID:</label>
             <input  type='text' id='shows' value={DefaultValue.state.id}/>




         

      <button onClick={handler}  type="button" style={{margin:"10px"}}> { data ? "UPLOAD USER DETAILS TO LOACAL STORAGE / Book Ticket" : "Details UpLoaded Successfully"}  </button>
    </div>
       </div>
       </form>
   
     </div>
  )
}

export default FromForTicketBoiking