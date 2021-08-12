import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import  FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon /> 
            </div>

            <div className="widgets__article">
            <div className="widgets__articleLeft">
             <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>Harshit Nigdikar successfully builts LinkedIn Clone </h4>
                <p>Top News - 1099 readers</p>
            </div>
            
        </div>
        </div>
    )
}

export default Widgets
