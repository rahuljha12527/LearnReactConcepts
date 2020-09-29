import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rahul",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  } 

  componentDidMount(){
      console.log('LifeCycleA componentDidMount');
  }

  shouldComponentUpdate(){
      console.log('LifeCycleA shouldComponentUpdate');
      return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
     console.log('LifeCycleA getSnapShotBeforeUpdate')

  }
  componentDidUpdate(){
     console.log('LifeCycleA componentDidUpdate')
  }
  shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponentUpdate');
    return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
   console.log('LifeCycleB getSnapShotBeforeUpdate')
   return null
}
componentDidUpdate(){
   console.log('LifeCycleB componentDidUpdate')
}

changeState=()=>{
  this.setState({
    name:'Rahul jha'
  })
}
  render() {

    console.log('LifeCycleA render');
    return (
        <div>
             <div>LifeCycle A</div>;
             <button onClick={this.changeState}>Change State</button>
             <LifeCycleB/>
        </div>
    )
   
  }
}

export default LifeCycleA;
