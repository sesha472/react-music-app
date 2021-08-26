import React from 'react';
import { Card,Button } from 'react-bootstrap';

const Postercard = (props) => {
    return (
        <div className=" d-flex flex-wrap justify-content-evenly  " style={{ marginTop:"50px" }}>
        {props.data.map(item=>{
          return( <Card  style={{ width: '270px',boxShadow:"1px 4px 6px black",color:"yellow"}} className="mt-5 bg-dark mb-5" >
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title> song : {item.title}</Card.Title>
            <Card.Text>
               MOVIE : {item.movie}
            </Card.Text>
           <audio controls  className="btn btn-info w-100" >
               <source src={item.song} type='audio/mp3'  />
           </audio>

            <Button variant="primary mt-1">{item.singer}</Button>
          </Card.Body>
        </Card>
        )}
        ) }
        
    </div>
    )
}

export default Postercard
