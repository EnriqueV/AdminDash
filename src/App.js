import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon, Table,Navbar,NavItem, Row, Col} from 'react-materialize';
import Divider from 'react-materialize/lib/Divider';
import DoughnutExample from './components/Analytics';
import BarChar from './components/Bar';

class App extends Component {
  render() {
    return (
    <div>
      <Navbar brand='Energy-Dashboard' right>
      <NavItem onClick={() => console.log('test click')}>Salir</NavItem>
      <NavItem href='#'></NavItem>
    </Navbar> 
 <Row>
  <Col s={4} className='grid-example'>
  <DoughnutExample/>
   </Col>
  <Col s={8} className='grid-example'>
  <BarChar/>
  </Col>
  
  </Row>
  
</div>
    );
  }
}

export default App;
