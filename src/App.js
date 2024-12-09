import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  let name = "Amine";

  function firstname() {
    return (
      <div className="App" style={{ textAlign: 'center', marginTop: '20px' }}>
        {name === "" ? (
          <h1 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold' }}>Hello, there!</h1>
        ) : (
          <>
            <h1 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold' }}>Hello, {name}!</h1>
            <img src='./logo192.png' alt='slm' style={{ width: '100px', marginTop: '20px' }} />
          </>
        )}
      </div>
    );
  }

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
      <Card style={{ width: '18rem', margin: 'auto', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Img variant="top" src={Image()} style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> <Name /> </Card.Title>
          <Card.Text style={{ fontSize: '16px', color: '#555', textAlign: 'center' }}> <Description /> </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ textAlign: 'center', fontSize: '18px' }}> <Price /> </ListGroup.Item>
        </ListGroup>
      </Card>
      <div> {firstname()} </div>
    </div>
  );
}

export default App;
