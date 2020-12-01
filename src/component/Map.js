/*global kakao */
import React, {useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import "../App.css";


export default function Map(){

  
    const [map, setMap] = useState();

    useEffect(() => {        
        mapscript();  
    }, []);

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

    const mapscript = () => {
        
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(37.506502, 127.053617),
            level: 7
        };
        
        setMap(new window.kakao.maps.Map(container, options));
       
       
    };
    const getList = async() => {

        const { data } = await axios.get("https://api-maps.cloud.toast.com/maps/v3.0/appkeys/ZJgW6dKQUUSNYWop/searches?query="+ keywords + "&startposition=0&reqcount=10");
        isSuccessful = Number(data.header.resultCode);

        if(isSuccessful == 0){
            setPoi(data.search.poi);
            const bounds = new kakao.maps.LatLngBounds();
            data.search.poi.map(poi => (
                 displayMarker(poi),
                 bounds.extend(new kakao.maps.LatLng(poi.dpy, poi.dpx))
            ));
            setIsLoding(false);
        }
    }
  
    const displayMarker = (place) => {
        
        
        
        var marker = new kakao.maps.Marker({
             map: map,
             position: new kakao.maps.LatLng(place.dpy, place.dpx) 
         });
       
         marker.setMap(map);

         var infowindow = new kakao.maps.InfoWindow({
            content: place.name1 // 인포윈도우에 표시할 내용
        });
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }

    const makeOverListener = (map, marker, infowindow) => {
        
       // infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.name1 + '</div>');
       return function() {
        infowindow.open(map, marker);
       }
        
    }

    const makeOutListener = (infowindow) => {
        return function() {
            infowindow.close();
        };
    }

    return (
      
        <div className="input">
        <div id="map" />  
        <div className="search">
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
                </div>
            
            )}
        </div> 
        </div>
    )
    
}
