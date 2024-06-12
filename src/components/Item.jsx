import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
//src={props.img}
const  Item = (props) => { //function - 1 ступень js, const - 2 уровень. Уровни отличаются друг от друга лишь их удобством
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='rounded' variant="top" src={props.img}/>
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Card.Text>
                {props.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
      </Card>
    )
}

export default Item;
