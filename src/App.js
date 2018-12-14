import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Hello />
        <SayFullName name="Elizabeth" surname="Mal" link="vk.com" />
        <SayFullName name="Inna" surname="Been" link="vk.com" />
        <SayFullName name="Anna" surname="Sotin" link="vk.com" />
      </div>
    );
  }
}

function Hello() {
  let phrase = "World"
  return (
    <h1>Hello {phrase} </h1>
  )
}

function SayFullName(props) {
  return (
    <div>
      <h1> My name is {props.name}, my surname is {props.surname} </h1>
      <a href={props.link}> Link to my profile </a>
    </div>
  )
}

export default App;
