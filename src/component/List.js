import React from "react";
import PropTypes from "prop-types"
import "./Map.css";

function List({address, name}) {
    
    return(
       
        <div className="list_content">
            <span>{address}</span>
            <span>{name}</span>
        </div>
    ) 

}

List.propTypes = {
    address: PropTypes.string.isRequired
}

export default List;