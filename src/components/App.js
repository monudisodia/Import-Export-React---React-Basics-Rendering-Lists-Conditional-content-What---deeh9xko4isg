import React, { Component, useState } from "react";
import Heading from '../components/Heading.js';
import SubHeading from '../components/SubHeading.js';
import InputQuery from '../components/InputQuery.js';
import SubmitButton from '../components/SubmitButton.js';
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      < SubmitButton/>
    </div>
  )
}

export default App;


