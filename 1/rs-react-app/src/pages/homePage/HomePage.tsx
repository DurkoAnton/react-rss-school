import TopSection from "../../components/topSection/TopSection";
import BottomSection from "../../components/bottomSection/BottomSection";
import {useState } from 'react';
import './HomePage.css'

function HomePage(){

    const [searchValue, setSearchValue] = useState(null); // string in search row -> use in API
    // const [isDataLoading, setIsDataLoading] = useState(false);
    const [isInitialClicked, setIsInitialClicked] = useState(null);

    const setSearchValueFn = (searchValue: string) =>{
        console.log("set was")
        setSearchValue(searchValue);
    }

    const changeDataLoadingState = (newDataLoadingState: boolean) =>{
        // console.log("set loading", newDataLoadingState)
        // setIsDataLoading(newDataLoadingState);
    }

    const changeIsInitialClicked = (resultFound: boolean) =>{
        console.log("set found ", resultFound)
        setIsInitialClicked(resultFound);
    } 

 

    console.log("YES")
    return (  

        <div className="homePageContainer">
            <TopSection className="topSection" setSearchValue={setSearchValueFn} setIsInitialClicked={changeIsInitialClicked}/>
            <hr></hr>
            {isInitialClicked ? 
            (<BottomSection searchValue={searchValue}/>)
            :
            (<h2>Click on "Search" button to see the result!</h2>)}
        </div>
    )


}
export default HomePage;