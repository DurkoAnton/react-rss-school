import { Component } from 'react';
import TopSection from './TopSection.tsx';
import BottomSection from './BottomSection.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class Parent extends Component <object,{responses:Array<object>, isDataLoading:boolean}> {
  constructor(props: object) {
    super(props);
    this.state = {
      responses: [],
      isDataLoading: false,
      searchvalue: null
    };
    this.set = this.set.bind(this);
    this.changeDataLoading = this.changeDataLoading.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
  }

  set(apiResponse: Array<object>) {
    this.setState({ responses: apiResponse });
  }

  changeDataLoading(isDataLoading: boolean) {
    this.setState({ isDataLoading: isDataLoading });
    console.log("set was")
  }

  setSearchValue(searchValue: string){
    
    console.log("searchValue")
    this.setState({searchvalue: searchValue});
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/home">

            <TopSection
              setSearchValue={this.setSearchValue}
              setresponse={this.set}
              setDataLoading={this.changeDataLoading}/>
            </Route>
           
            
          
            {/* <Route path="/search">
              <TopSection
                setSearchValue={this.setSearchValue}
                setresponse={this.set}
                setDataLoading={this.changeDataLoading}/>
              <BottomSection
                searchvalue={this.state.searchvalue}
                responses={this.state.responses}
                isDataLoading={this.state.isDataLoading}/> 
            </Route> */}
          </Switch>
        </Router>
       
      </ErrorBoundary>
    );
  }
}

export default Parent;