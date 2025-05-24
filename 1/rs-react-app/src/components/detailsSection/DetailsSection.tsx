import { Component, useEffect, useState } from 'react';
import './DetailsSection.css'
import { useOutletContext } from "react-router-dom";
import { useNavigate, useSearchParams } from 'react-router-dom';

function DetalsSection(props: any){

    const history = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    const back = ()=>{
        console.log(searchParams.get("page"))
        let detailsSearchParams: {search: string, details: string, page: string} = {};
    
        searchParams.forEach((value, name)=>{
            detailsSearchParams[name] = value;
        })

        history(`/home?search=${searchParams.get("search")}&page=${searchParams.get("page")}`)

    }
    const cont = useOutletContext();
    //console.log(cont)
    return (
        <>
        <hr></hr>
        <div>
            <h2>Details</h2>
        </div>
        <div className='detailsSectionLayout'>
            <div className='detailsSection'>
                <label>Descriptions:</label>
                <a href="https://google.com" target="_blank">{cont}</a>
            </div>
            <div className='backButtonSection'>
                <button onClick={back}>back</button>
            </div>
        </div>
        
        </>

    )
}

export default DetalsSection;