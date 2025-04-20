import { Component, useEffect, useState } from 'react';
import './BottomSection.css';
import Table from 'react-bootstrap/Table';
import { BarLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom"


function BottomSection(props: any){

  const [tbodyData, setTbodyData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [numberRows, setNumberRows] = useState(3);
  const [currentNumberRows, setCurrentNumberRows] = useState(0);
  const [fullData, setFullData] = useState([]);

  const history = useNavigate()

  useEffect(()=>{
    console.log("use effect")
    //console.log(props.searchvalue.trim())
    if (props.searchvalue == null) {
      console.log("no")
      return;
    }
    // else {
    //   console.log(props.searchvalue)
    // }
    const arrays: Array<object> = [];
    const xhr = new XMLHttpRequest();
    const nextURL = `http://swapi.dev/api/people`;
    //let jsonResponses = [];
    setCurrentNumberRows(1);
    setCurrentPageData([{id: "id", description : "desc"}]);

    xhr.onload = async function () {
      

      // if (xhr.status === 200) {
      //   const res = JSON.parse(xhr.responseText);
      //   const jsonResponses = res.results;
        
      //   jsonResponses.forEach((element: {name: string, gender: string}) => {
      //     arrays.push({
      //       id: element.name,
      //       description: element.gender,
      //     });
      //   });
      //   //console.log(arrays)
      //   if (arrays.length == 0) {
      //     //console.log("no set")
      //     setTbodyData([]);
      //   } else {
      //     console.log("set")
      //     setTbodyData(arrays);
      //     setFullData(arrays);
      //      let currentIndex = 0;
      //      let currentPage = [];
      //     for (let element of arrays) {
      //       if (currentIndex >= numberRows){
      //         currentIndex = 0;
      //        console.log("get")
      //        //console.log(currentPage)
      //         break;
      //       }
      //       currentPage.push(element);
      //       currentIndex++;
      //     }
      //      setCurrentNumberRows(1);
      //      setCurrentPageData(currentPage);
      //      console.log(currentPageData)
      //     // divide to pages
      //   }

      //   //props.setDataLoading(false);
      // }
    }.bind(this);

   // xhr.open('GET', nextURL, false);
    //props.setDataLoading(true);
    
    try {
    // xhr.send();
     //const params = new URLSearchParams();
    // params.append("name", "query")
    // console.log(history)
     //history.push({search: params.toString()})
// currentUrlParams.set('page', "1");
// console.log(props.history)
// props.history.push(window.location.pathname + "?" + currentUrlParams.toString());
    } catch {
      // this.setState(() => {
      //   throw new Error('Making request error');
      // });
    }
    //let tbodyData : Array<{id: string, description: string}> = [];
   

  },[props.searchvalue])

  const onPrevPage = ()=>{
    //console.log("next page")
    let currentPage = [];
    let i = numberRows*(currentNumberRows-2);
    const nextPage = i + numberRows;
    for(i; i < nextPage && i < fullData.length && i >= 0; i++){
      //console.log(i)
      currentPage.push(fullData[i])
    }
    if (currentPage.length > 0){
      const currentPageNumberRow = currentNumberRows-1;
      setCurrentNumberRows(currentPageNumberRow);
      setCurrentPageData(currentPage);
      history('/search/' + currentPageNumberRow)
      //console.log(currentPage)
    }
  }

  const onNextPage = ()=>{
    console.log("next page")
    let currentPage = [];
    let i = numberRows*currentNumberRows;
    const nextPage = i + numberRows;
    for(i; i < nextPage && i < fullData.length; i++){
      //console.log(i)
      currentPage.push(fullData[i])
    }
    if (currentPage.length > 0){
      const currentPageNumberRow = currentNumberRows+1;
      setCurrentNumberRows(currentPageNumberRow);
      setCurrentPageData(currentPage);
      history('/search/' + currentPageNumberRow)
      //console.log(currentPage)
    }
  }

  const tableROwClick = (prp)=>{
    console.log("row click")
    console.log(prp.target.textContent)
    props.setClickedRowID(prp.target.textContent);
    history("/search/" + currentNumberRows + "/details");
  }

  // if (props.isDataLoading) {
  //   return (
  //     <div className='bottomSection'>
  //       <BarLoader
  //         className="barLoader"
  //         color="purple"
  //         height={4}
  //         width={100}
  //         loading={true}
  //       />
  //     </div>
  //   );
  // } else {
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
            {currentPageData.map((item : {id:string, description:string}) => {
              return (
                <tr onClick={tableROwClick}>
                  <td id="id" width="30%" className='apiTable'>{item.id}</td>
                  <td>{item.description}</td>
                </tr>
              );
              // out  
            })}
          </tbody>
        </Table>
        <button onClick={onPrevPage}>Prev</button>
        <text>{currentNumberRows}/{ Math.ceil(fullData.length/numberRows)}</text>
        <button onClick={onNextPage}>Next</button>
      </div>
    );
  //}
}

// class BottomSection extends Component<{isDataLoading: boolean, responses: Array<{id: string, description: string}>}, {isDataLoading : string}> {

//   constructor(props : {isDataLoading: boolean, responses: Array<{id: string, description: string}>}) {
//     super(props);
//   }


//   // render() {
//   //   let tbodyData : Array<{id: string, description: string}> = [];
//   //   if (this.props.responses.length == 0) {
//   //     tbodyData = [];
//   //   } else {
//   //     tbodyData = this.props.responses;
//   //   }

//   //   if (this.props.isDataLoading) {
//   //     return (
//   //       <div className='bottomSection'>
//   //         <BarLoader
//   //           className="barLoader"
//   //           color="purple"
//   //           height={4}
//   //           width={100}
//   //           loading={true}
//   //         />
//   //       </div>
//   //     );
//   //   } else {
//   //     return (
//   //       <div className='bottomSection'>
//   //         <Table striped bordered hover className='apiTable'>
//   //           <thead>
//   //             <tr>
//   //               <th>ID</th>
//   //               <th>Description</th>
//   //             </tr>
//   //           </thead>
//   //           <tbody>
//   //             {tbodyData.map((item : {id:string, description:string}) => {
//   //               return (
//   //                 <tr>
//   //                   <td width="30%" className='apiTable'>{item.id}</td>
//   //                   <td>{item.description}</td>
//   //                 </tr>
//   //               );
//   //             })}
//   //           </tbody>
//   //         </Table>
//   //         <button>Prev</button>
//   //         <button onClick={this.onNextPage}>Next</button>
//   //       </div>
//   //     );
//   //   }
//   // }
// }

export default BottomSection;
