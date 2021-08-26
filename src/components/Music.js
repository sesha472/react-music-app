import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { FormControl, Navbar} from 'react-bootstrap';
import Postercard from './Postercard.js';

const Music = () => {
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState(null);

    useEffect(() => {
        axios.get('https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json')
      
        .then(res=>{
           !search ? setdata(res.data) : setdata(res.data.filter(songs => songs.singer.toLowerCase().startsWith(search.toLowerCase())))
          })
    }, [search]);

 const inputdata=(e)=>{
   e.preventDefault();
   setsearch(search);
 }
    return (
        <div>
       <Navbar className=" fixed-top  mt-1 d-flex justify-content-between" bg="dark" expand="lg">
           <h1 className="fs-1 bg-info ms-4 rounded ps-3 pe-3">SESHA</h1>
    <form className="d-flex justify-content-around me-5 " onSubmit={inputdata}>
      <FormControl  
      className="btn btn-outline-info"
        type="text"
        onChange={(e)=>setsearch(e.target.value)}
        placeholder="Search"
        
      />
      <input  type="submit" placeholder="search" className="btn btn-outline-success ms-3" />
    </form>
      </Navbar>

      { data.length>1 ?
      (<center> 
         <Postercard data={data} /> 
         </center>)  : (<h1>loading...</h1>)
         }
    
           
           
        </div>
    )
}

export default Music;
