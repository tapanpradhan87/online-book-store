import React from 'react'
import Card from 'react-bootstrap/Card';


export default function ({item={}}) {
    const {id, body, title, userId} = item;
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{userId}</Card.Subtitle>
            <Card.Text>
              {body}
            </Card.Text>            
          </Card.Body>
        </Card>
      );
}
