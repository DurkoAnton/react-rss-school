import React, { Component } from 'react';
import './BottomSection.css'
import Table from "../../Reusables/Table";

// Define a class component that extends React.Component or React.PureComponent
class BottomSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      responses : props.responses
    }
    //console.log("botton")
    console.log(props)
  }
  render() {
    console.log("botton render454");
    console.log(this.state);
const tbodyData = [
{
  id: "1", 
 name: "123"
}, 
{
  id: "2", 
   name: "123"
},
{
  id: "3", 
   name: "123"
},
]
return (
  <div></div>
)
    // return (
    //     <div>
    //         {/* <table>
    //             <tr>
    //                 <th>id</th>
    //                 <th>Age</th>
    //             </tr>
    //             {tbodyData.map((item) => {
    //                 return (
    //                     <tr>
    //                         <td>{item.id}</td>
    //                         <td>{item.name}</td>
    //                     </tr>
    //                 )
    //             })}
    //         </table> */}
    //     </div>
    // )
  }
}

export default BottomSection;