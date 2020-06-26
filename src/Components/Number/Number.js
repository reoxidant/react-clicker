import React from "react";
import './Number.css';

const Number = (props) => {
    return (
        <div className="clicker-number">
            <input disabled={1} type="text" value={props.number}/>
        </div>
    );
}

export default Number;