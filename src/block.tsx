import * as React from 'react';
import { useState } from "react";

const blockCss:React.CSSProperties={
    background:'white',
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