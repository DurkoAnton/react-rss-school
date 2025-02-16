import { Component } from 'react';
import './TopSection.css';
import Parent from './Parent.tsx'

class TopSection extends Component<{ setresponse: Parent["set"], setDataLoading: Parent["changeDataLoading"] }, { searchvalue: string }> {
  constructor(props : { setresponse: Parent["set"], setDataLoading: Parent["changeDataLoading"] }) {
    super(props);
    this.state = {
      searchvalue: '',
    };
    this.updateInput = this.updateInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  async sleep (){
    return new Promise((resolve) => setTimeout(resolve, 1700));
  } 
  updateInput() {
    const xhr = new XMLHttpRequest();
    localStorage.setItem('searchValue', this.state.searchvalue.trim());

    const arrays: Array<object> = [];

    const nextURL = `https://swapi.dev/api/people?search=${this.state.searchvalue.trim()}`;

    xhr.onload = async function () {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        const jsonResponses = res.results;

        jsonResponses.forEach((element: {name: string, gender: string}) => {
          arrays.push({
            id: element.name,
            description: element.gender,
          });
        });
        this.props.setDataLoading(false);
      }
    }.bind(this);

    xhr.open('GET', nextURL, true);
    this.props.setDataLoading(true);
    
    try {
      xhr.send();
    } catch {
      this.setState(() => {
        throw new Error('Making request error');
      });
    }
    
    this.props.setresponse(arrays);
  }

  onChange(e:{target:{value:string}}) {
    this.setState({ searchvalue: e.target.value });
  }

  render() {
    const defaultSearchValue = localStorage.getItem("searchValue") as string;
    return (
      <div className="topSection">
        <input
          name="searhInput"
          onChange={this.onChange}
          className="topSectionInput"
          defaultValue={defaultSearchValue}
        ></input>
        <button onClick={this.updateInput} className='topSectionButton'>Search</button>
      </div>
    );
  }
}

export default TopSection;
