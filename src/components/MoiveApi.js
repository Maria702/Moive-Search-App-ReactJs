import axios from 'axios'
import React , {useState} from 'react'


const MoiveApi = () => {
    const[movie , setMovie]= useState();
    const getMoive =(e)=>{
        axios.get(`https://www.omdbapi.com/?s=kabhi&apikey=89186023`)
        .then((data)=>{
            console.log(data.data.Search)
            setMovie(data.data.Search)
        })
    }

  return (
    <>
    
    
    <button onClick={getMoive}>Search</button>

    <div>
        {
            movie && movie.map((value, index)=>{
                return(
                    <h2>
                        {value.Title}
                    </h2>
                )
            })
        }
    </div>
    
    
    </>
  )
}

export default MoiveApi