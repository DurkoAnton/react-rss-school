import { Component } from 'react';
import './BottomSection.css';
import Table from 'react-bootstrap/Table';
import { BarLoader } from 'react-spinners';

class BottomSection extends Component<{isDataLoading: boolean, responses: Array<{id: string, description: string}>}, {isDataLoading : string}> {

  constructor(props : {isDataLoading: boolean, responses: Array<{id: string, description: string}>}) {
    super(props);
  }

  render() {
    let tbodyData : Array<{id: string, description: string}> = [];
    if (this.props.responses.length == 0) {
      tbodyData = [];
    } else {
      tbodyData = this.props.responses;
    }

    if (this.props.isDataLoading) {
      return (
        <div className='bottomSection'>
          <BarLoader
            className="barLoader"
            color="purple"
            height={4}
            width={100}
            loading={true}
          />
        </div>
      );
    } else {
      return (
        <div className='bottomSection'>
          <Table striped bordered hover className='apiTable'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {tbodyData.map((item : {id:string, description:string}) => {
                return (
                  <tr>
                    <td width="30%" className='apiTable'>{item.id}</td>
                    <td>{item.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default BottomSection;
