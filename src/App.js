import React from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row style={{backgroundColor: 'red'}}>
          <Col>1 of 4</Col>
          <Col>2 of 4</Col>
        </Row>
      </Container>
      <div className="mt-1r d-flex justify-content-between">
        <div>
          Col1
        </div>
        <div>
          Col2
        </div>
      </div>
      <div className="mt-1r d-flex justify-content-start">
        <div>
          Col1
        </div>
        <div>
          Col2
        </div>
      </div> 

      <div className="card mt-1r" style={{ width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  href="http://www.cnn.com" className="card-link">Card link</a>
          <a  href="http://www.foxnews.com" className="card-link">Another link</a>
        </div>
      </div>    

      <div className="card mt-1r">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="http://www.cnn.com" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
  );
}

export default App;
