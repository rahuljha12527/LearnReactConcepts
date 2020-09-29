import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent'
import PureComp from './PureComp';
import MemoComponent from './MemoComponent';

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Rahul'
         }
     }

     componentDidMount(){
         setInterval(()=>{
             this.setState({
                 name:'Rahul'
             })
         },
         2000)
     }
     
    render() {
        console.log("**********Parent Comp render*************")
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name} />
                {/* <RegComponent name={this.state.name}></RegComponent>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
