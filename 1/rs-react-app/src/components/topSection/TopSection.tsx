import { Component, useState, useRef } from 'react';
import './TopSection.css';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function TopSection (props:any){
  
  const searchRef = useRef();
  const history = useNavigate();
  const [, setSearchParams] = useSearchParams();

  const updateInput = () => {
    console.log("update search")
    props.setSearchValue(searchRef.current.value);
    props.setIsInitialClicked(true);
    setSearchParams({ search: searchRef.current.value, page: "1" });
  }
  
  //const defaultSearchValue = localStorage.getItem("searchValue") as string;
  //console.log(localStorage)
  return (
    <>
    <header>
        </header>
        <main>
          <h2>Top section</h2>
        <div className="topSection">
          <input
            name="searhInput"
            className="topSectionInput"
            placeholder="Search"
            ref={searchRef}
          ></input>
          <button onClick={updateInput} className='topSectionButton'>Search</button>
        </div>
        </main>
       <footer>
       </footer>
    </>
  );
}

export default TopSection;
