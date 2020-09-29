import React, { Component } from 'react'
import {Greet}  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/classClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

export  default class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
        {/* <FragmentDemo /> */}
        {/* <LifeCycleA /> */}
        {/* <Form /> */}
        {/* <StyleSheet /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <FunctionClick> </FunctionClick> */}
        {/* <EventBind></EventBind> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        
        {/* <Greet name="Bruce" heroname="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet  name="Clark" heroname="Superman">

          <button>Action</button>
        </Greet> */}
        {/* <Greet  name="Diana"  heroname="Wonder Woman"/>
       
          <Welcome name="Bruce" heroname="Batman"/> */}
          {/* <Welcome name="Clark" heroname="Superman"/>
          <Welcome name="Diana"  heroname="Wonder Woman"  />
          <Hello/> */}
      </div>
    )
  }
}
