import {  useEffect, useState, useRef } from 'react';
import './BottomSection.css';
import Table from 'react-bootstrap/Table';
import { useSearchParams, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { transformWithEsbuild } from 'vite';
import { isConstructorDeclaration } from 'typescript';

function BottomSection(props: any){

  const [currentPageData, setCurrentPageData] = useState([]);
  const [numberRows, setNumberRows] = useState(3);
  const [currentNumberRows, setCurrentNumberRows] = useState(0);
  const [fullData, setFullData] = useState([]);
  const [isResultFound, setIsResultFound] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [clickedRowID, setClickedRowID] = useState(null);

  const history = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  //const hasMounted = useRef(false);


  useEffect(() => {
    console.log("use effect", props.searchValue)
    if (props.searchValue == null) { return; }

    const arrays: Array<object> = [];
    const xhr = new XMLHttpRequest();
    let nextURL = `https://restcountries.com/v3.1/`;
    nextURL += props.searchValue.trim() != `` ? `name/${props.searchValue.trim()}` : `all/`

    xhr.onload = function () {
      console.log("onload", xhr.status)
      //await sleep(8000);
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        const jsonResponses = res;
        
        jsonResponses.forEach((element: {name: string, gender: string}) => {
          arrays.push({
            id: element.name.common,
            description: element.name.official,
          });
        });
        //console.log(jsonResponses)
        if (arrays.length != 0){
          console.log("set")
          //setTbodyData(arrays);
          setFullData(arrays);
          let currentIndex = 0;
          let currentPage = [];
          for (let element of arrays) {
            if (currentIndex >= numberRows) { break; }
            currentPage.push(element);
            currentIndex++;
          }
          setCurrentNumberRows(1);
          setCurrentPageData(currentPage);
          console.log("found")
          setIsResultFound(true);
          //props.setResultFound(true);
        }
        else {
          setIsResultFound(false);
          //props.setResultFound(false);
        }
        
      }
      else {
        setIsResultFound(false);
      }
      setIsDataLoading(false);
    }.bind(this);

    xhr.open('GET', nextURL, false);
    
    //try {
      setIsDataLoading(true);
      xhr.send();
     console.log("after send")
    // } catch {
    //   console.log("EXCEPTION")
    //   // this.setState(() => {
    //   //   throw new Error('Making request error');
    //   // });
    // }

    
  },[props.searchValue])

  const onPrevPage = ()=>{
    let currentPage = [];
    let i = numberRows*(currentNumberRows-2);
    const nextPage = i + numberRows;
    for(i; i < nextPage && i < fullData.length && i >= 0; i++){
      currentPage.push(fullData[i])
    }
    if (currentPage.length > 0){
      const currentPageNumberRow = currentNumberRows-1;
      setCurrentNumberRows(currentPageNumberRow);
      setCurrentPageData(currentPage);
      setSearchParams({ search: props.searchValue, page: currentPageNumberRow });
    }
  }

  const onNextPage = ()=>{
    let currentPage = [];
    let i = numberRows*currentNumberRows;
    const nextPage = i + numberRows;
    for(i; i < nextPage && i < fullData.length; i++){
      currentPage.push(fullData[i])
    }
    if (currentPage.length > 0){
      const currentPageNumberRow = currentNumberRows+1;
      setCurrentNumberRows(currentPageNumberRow);
      setCurrentPageData(currentPage);
      setSearchParams({ search: props.searchValue, page: currentPageNumberRow });
    }
  }

  const tableROwClick = (prp)=>{
    setClickedRowID(prp.target.textContent)
    console.log(prp.target.textContent)
    let detailsSearchParams: {search: string, details: string, page: string} = {};
    searchParams.forEach((value, name)=>{
      detailsSearchParams[name] = value;
    })
    history(`/home/details?search=${props.searchValue}&page=1`)
  }

  const textPrev = "<";
  const textNext = ">";

  console.log(isDataLoading)
  if (isDataLoading){
    return (<h2>Loading...</h2>)
  }
  else if (isResultFound){
    return (
      <div className='bottomSection'>
        <h2>Results</h2>
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
        <div className='paginationContainer'>
          <button onClick={onPrevPage}>{textPrev}</button>
          <text> {currentNumberRows} / { Math.ceil(fullData.length/numberRows)} </text>
          <button onClick={onNextPage}>{textNext}</button>
        </div>
        <Outlet context={clickedRowID}/>
      </div>);
  }
  else {
    return (
    <>
      <h2>Results</h2> 
      <h3>Result is not found!</h3>
    </>)
  }
    
  //}
}

export default BottomSection;
