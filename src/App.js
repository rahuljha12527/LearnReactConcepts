import React, { Component } from "react";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/classClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComponent from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounterTwo />
        <HoverCounterTwo />
        {/* <ClickCounter  name="Rahul"/>
        <HoverCounter /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
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
    );
  }
}
