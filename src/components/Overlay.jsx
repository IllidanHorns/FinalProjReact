import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Overlay = (props) => {
  return (
    <div>
      <div><h1>Корзина</h1></div>

      {props.overlayItems.length > 0 ? (
        <div>
          {props.overlayItems.map((obj) => (
            <Card key={obj.id} style={{ width: '18rem' }}>
              <Card.Img className='rounded' variant="top" src={obj.img}/>
              <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>
                  {obj.description}
                </Card.Text>
                <Card.Text>
                  {obj.price}
                </Card.Text>
                <Button
                  onClick={() => props.deleteItem(obj.id)}>
                  Удалить
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <h1>Пусто</h1>
      )}

      <div>
        <p>Итог: </p>
        <p>{props.total_price}</p>
      </div>
    </div>
  );
};

export default Overlay;