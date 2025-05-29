import React, { useState } from "react";




export function Card({digit}){
    return (
        <div>
            <button className="btn btn-dark">{digit}</button>
        </div>     
    )

}

export default Card;