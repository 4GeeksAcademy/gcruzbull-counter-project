import React, { useState } from "react";




export function Card({digit}){
    return (
        <div>
            <button className="btn btn-dark card-size">{digit}</button>
        </div>     
    )

}

export default Card;