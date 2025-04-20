import { Component } from 'react';
import TopSection from './TopSection.tsx';
import BottomSection from './BottomSection.tsx';
import BottomSectionDetails from './BottomSectionDetails.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import './Parent.css';

class Parent extends Component <object,{responses:Array<object>, isDataLoading:boolean}> {
  constructor(props: object) {
    super(props);
    this.state = {
      responses: [],
      isDataLoading: false,
      searchvalue: null,
      clickedRowID: null
    };
    this.set = this.set.bind(this);
    this.changeDataLoading = this.changeDataLoading.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
    this.setClickedRowID = this.setClickedRowID.bind(this);
  }

  set(apiResponse: Array<object>) {
    this.setState({ responses: apiResponse });
  }

  changeDataLoading(isDataLoading: boolean) {
    this.setState({ isDataLoading: isDataLoading });
    console.log("set was")
  }

  setSearchValue(searchValue: string){
    console.log("searchValue");
    this.setState({searchvalue: searchValue});
  }

  setClickedRowID(rowID : string){
    console.log("clickedRowID");
    this.setState({clickedRowID: rowID});
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route index element={
              <TopSection setSearchValue={this.setSearchValue} setresponse={this.set} setDataLoading={this.changeDataLoading}/>}/>
              <Route path="/search/:id" element=
              {
                <> 
                <TopSection setSearchValue={this.setSearchValue} setresponse={this.set} setDataLoading={this.changeDataLoading}/>
                <BottomSection searchvalue={this.state.searchvalue} responses={this.state.responses} isDataLoading={this.state.isDataLoading} setClickedRowID={this.setClickedRowID}/>
                </> }>
                
              </Route>
            <Route path="/search/:id/details" element={ <BottomSectionDetails 
                  clickedRowID={this.state.clickedRowID} setSearchValue={this.setSearchValue} setresponse={this.set} setDataLoading={this.changeDataLoading}/> }>
              </Route>
          </Routes>
        </Router>
       
      </ErrorBoundary>
    );
  }
}

// function MainPageLayout(){
//     return 
//       <>
//        <TopSection/>
//        <BottomSection/>
//       </>
// }

export default Parent;