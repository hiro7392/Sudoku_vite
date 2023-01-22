import * as React from 'react';
import { useState } from "react";

const blockCss:React.CSSProperties={
    background:'white',
    width:100,
    height:100,
}
export type Mass={
    num:number;
    isFixed:boolean;
}
export const Block=()=>{
    const [num,setNum]=useState(0);

    return(
        <div className="" style={blockCss}>
            {num}
        </div>
    )
};