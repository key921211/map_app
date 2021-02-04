/*global kakao */
import React from "react";
import PropTypes from "prop-types";

function List({address, name, dpx, dpy, map}) {

    const getCenter = () => {
      
        map.setCenter(new kakao.maps.LatLng(dpy, dpx));
        map.setLevel(1);
    }
    
    return(
       
        <div className="list_content" onClick={getCenter}>
            <span>{address}</span>
            <span>{name}</span>
        </div>
    ) 

}

List.propTypes = {
    address: PropTypes.string.isRequired
}

export default List;