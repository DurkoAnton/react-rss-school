import { Component } from 'react';
import './TopSection.css'

// Define a class component that extends React.Component or React.PureComponent
class TopSection extends Component {

  constructor(props){
    console.log(props)
  super(props);
  this.state = {searchvalue: "", setresponse:props.setresponse};
  this.updateInput = this.updateInput.bind(this);
  this.onChange = this.onChange.bind(this);
  }

  // Define lifecycle methods if necessary
updateInput(e) {
    const xhr = new XMLHttpRequest();
    
   // xhr.onload = xhr.onload.bind(this);
    const arrays : Array<object> = [];
    let obj = {id:String, description:String}

    // xhr.onload = function() {
    //   if (xhr.status === 200) {
    //     const jsonResponse = JSON.parse(xhr.responseText).results[0];
    //     if (jsonResponse){
    //       //console.log(jsonResponse.episode_id)
    //       arrays.push({
    //         id : jsonResponse.episode_id,
    //         description: jsonResponse.title
    //       })
       
    //     }
    //   }
    // };
    // xhr.open('GET', 'https://swapi.dev/api/films/?search=hope', false);
    // xhr.send();

    console.log("after reqs")
    //console.log("123");
    this.state.setresponse("55");
  }

  onChange(e){
    this.setState({searchValue: e.target.value})
    return (
      <>
      <div className='wrapper'>
        <input name="searhInput" onChange={this.onChange}></input>
        <button onClick={this.updateInput}>Search</button>
      </div>
      </>
    )
  }

  // Define render() method to return JSX
  render() {
    return (
      <>
      <div className='wrapper'>
        <input name="searhInput" onChange={this.onChange}></input>
        <button onClick={this.updateInput}>Search</button>
      </div>
      </>
    )
}
}

export default TopSection;