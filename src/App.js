import React, { useEffect, useState } from 'react'
import MovieBox from './MovieBox';
import axios from 'axios';
import Summary from './Summary';


const API_URL = "https://api.tvmaze.com/search/shows?q=all"


function App() {

  const [movies,setMovies] = useState([]);

  useEffect(()=>{
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data =>{
          console.log(data)
          setMovies(data)
     
          })
        },[])

  // useEffect(()=>{
  //     axios.get("https://api.tvmaze.com/search/shows?q=all")
  //     .then(res => setMovies(res.data))
  //      .catch(err => console.log(err))
  // },[])
              
    
  return (
    <div className='main-app'>
      {
        movies.map((movieReq)=> 
     <MovieBox  key={movieReq.show.id} {...movieReq}/>)
    
      }
       {/* <div>
         <table>
           <thead>
             <tr>ID</tr>
            
           </thead>
           <tbody>
             { movies.map((r,i)=>(
               <tr key={i}>{r.show.summary}</tr>
           
             ))

           }
          </tbody>
        </table>
        <h1></h1>
     </div>  */}
 </div>

  )
}

export default App