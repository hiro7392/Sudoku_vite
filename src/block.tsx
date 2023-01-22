import * as React from 'react';
import { useState } from "react";

const blockCss:React.CSSProperties={
    background:'white',
    width:'100px',
    height:'100px',
}
export type Mass={
    num:number;
    isFixed:false;
}
export const Block=()=>{
    const [num,setNum]=useState(0);

    return(
        <div className="" style={blockCss}>
            {num}
        </div>
    )
};