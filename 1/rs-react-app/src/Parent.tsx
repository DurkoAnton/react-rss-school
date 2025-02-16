import { Component } from 'react';
import TopSection from './TopSection.tsx';
import BottomSection from './BottomSection.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

class Parent extends Component <object,{responses:Array<object>, isDataLoading:boolean}> {
  constructor(props: object) {
    super(props);
    this.state = {
      responses: [],
      isDataLoading: false,
    };
    this.set = this.set.bind(this);
    this.changeDataLoading = this.changeDataLoading.bind(this);
  }

  set(apiResponse: Array<object>) {
    this.setState({ responses: apiResponse });
  }

  changeDataLoading(isDataLoading: boolean) {
    this.setState({ isDataLoading: isDataLoading });
    console.log("set was")
  }

  render() {
    return (
      <ErrorBoundary>
        <TopSection
          setresponse={this.set}
          setDataLoading={this.changeDataLoading}
        />
        <BottomSection
          responses={this.state.responses}
          isDataLoading={this.state.isDataLoading}
        />
      </ErrorBoundary>
    );
  }
}

export default Parent;