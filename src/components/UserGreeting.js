import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

   return (this.state.isLoggedIn && <div>
    Welcome Vishwas
</div>) 
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Rahul</div>
    // ) : (
    //   <div>Welcome jha</div>
    // );

    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Vishwas</div>
    // }else{
    //     message=<div>Welcome GUest</div>
    // }

    //    return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Rahul jha</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Rahul</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
