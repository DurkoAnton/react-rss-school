import { Component} from 'react';
import TopSection from './TopSection.tsx'
import BottomSection from './BottomSection.tsx'

class Parent extends Component {

  constructor(props){

    super(props);
      this.state = {
        responses : ""
      }
      this.set = this.set.bind(this);
      //this.set("init1")
  }

  set(val){
    console.log("set was")
    //v.push({})
    //console.log(typeof(val))
    this.setState({responses: "55523"});
  }

  render(){
    return (
        <>
         <TopSection setresponse = { this.set }/>
         <BottomSection responses = { this.state.responses }/>
        </>
      )  
  }
}

export default Parent
