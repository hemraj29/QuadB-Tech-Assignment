import React from 'react'
import { Link,useNavigate } from 'react-router-dom'






function MovieBox(props) {
 const navigate = useNavigate();
 const id = props.score;
 const name = props.show.name;
 const imageUrl = props.show.image.medium;
 const summary = props.show.summary;
 const rating = props.show.rating.average;
const  showId = props.show.id;


 const navigateSummary = () =>{
     navigate('/detail', {state : {id : id,
                                   name : name,
                                   image : imageUrl,
                                  summary:summary,
                                rating : rating,
                                showId : showId}})
 }


  return (
    <div className='movie-box'>
    <img src={props.show.image.medium}/>
        <div className='movie-box-text'>
           <h4>Name:{props.show.name}</h4>
           <h5>STATUS:<span>{props.show.status}</span></h5>
           
            <button className='box-btn' type='button' onClick={navigateSummary}>View-More</button>
        </div>
    
    </div>
  )
}

export default MovieBox