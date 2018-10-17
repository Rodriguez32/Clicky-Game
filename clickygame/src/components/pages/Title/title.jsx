import React, { Component } from 'react';
import "../Title/title.css";

class Title extends Component {
   
    render() { 
        return ( 
            <div className="titlebox">
            <h1>Dog Clicky Game!</h1>
            <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div> 
         );
    }
}
 
export default Title;