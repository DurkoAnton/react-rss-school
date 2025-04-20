import { Component, useEffect, useState } from 'react';
import './BottomSectionNew.css';
import Table from 'react-bootstrap/Table';
import { BarLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom"
import TopSection from './TopSection.tsx';
import BottomSection from './BottomSection.tsx';

function BottomSectionDetails(props: any){

    const history = useNavigate()

    const onGoBackClick = function(){
        history(-1);
    }

    useEffect(()=>{
        console.log(props.clickedRowID)
        if (props.clickedRowID == null){
            return;
        }

        //const arrays: Array<object> = [];
        const xhr = new XMLHttpRequest();
        const nextURL = `https://swapi.dev/api/people?search=${props.clickedRowID.trim()}`;
    

    xhr.onload = async function () {
        if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            const jsonResponses = res.results;
            console.log(jsonResponses[0])
        }
    }.bind(this);

    //xhr.open('GET', nextURL, false);
    //xhr.send();
    }, [props.clickedRowID])

    return (
        <div className='twoSections'>
            <div className='leftSide'>
            <TopSection setSearchValue={props.setSearchValue} setresponse={props.set} setDataLoading={props.changeDataLoading}/>
            </div>
            <Divider />
            <div className='rightSide'>
                <text>ID: {props.clickedRowID}</text>
                <button onClick={onGoBackClick}>Back</button>
            </div>
            
            
        </div>
    )
}
const Divider = () => {
    return (
        <hr
            style={{ borderTop: "1px solid lightgrey" }}
        ></hr>
    );
};

export default BottomSectionDetails;
