import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import Marker from "./Marker";
import Map from "./Map";
import "../App.css";
import "./Map.css";
function Input(){
    
    let [isLoding, setIsLoding] = useState(true);
    let [isSuccessful] = useState(0);
    const [pois, setPoi] = useState([]);
    const [keywords, setInputs] = useState("");
    
    const onChange = (e) => {
        setIsLoding(true);
        setInputs(e.target.value);
    }
   
    const onClick = () => {

        getList();  
    }

    const getList = async() => {

        const { data } = await axios.get("https://api-maps.cloud.toast.com/maps/v3.0/appkeys/ZJgW6dKQUUSNYWop/searches?query="+ keywords + "&startposition=0&reqcount=10");
        isSuccessful = Number(data.header.resultCode);

        if(isSuccessful == 0){
            setPoi(data.search.poi);

            setIsLoding(false);
        }
    }

    return (
        <div className="input">
            <div className="keywords_input">
                <input type="text" className="keywords" name="keywords" onChange={onChange}/>
                <button onClick={onClick}>검색</button>
            </div>
            {isLoding ? (
                <div className="list"></div>
            ) : (
                <div className="list">
                    {pois.map(poi => (
                        <React.Fragment key={poi.poiid}>
                            <List key={poi.poiid} address={poi.address} name={poi.name1}/>
                        </React.Fragment>
                    ))}
                    <Map pois={pois} />
                </div>
               
            )}
        </div>
    )
}

export default Input;