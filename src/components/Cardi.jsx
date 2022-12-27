import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';




function Cardi({src, titulo, desc}) {
    return (
      <div className='cardp'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {desc}
            </Card.Text>
            <Button variant="primary">Ver Regalo</Button>
          </Card.Body>
        </Card>
      </div>
      );
}

export default Cardi