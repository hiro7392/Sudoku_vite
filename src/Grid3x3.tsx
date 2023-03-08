import { useEffect, useState } from "react";

const rowStyle={
    display:"flex",
    margin:"0px",
    background:"grey",
};

const massCss:React.CSSProperties={
    background:'white',
    color:'blue',
    fontSize:'20px',
    width:'0.5rem',
    margin:'0px',
    padding:"0.5rem 0.7rem 0.5rem 0.7rem",
    borderWidth: '0.5px',
    borderColor: 'black',
    borderStyle: 'dashed',
}

const massFixedCss:React.CSSProperties={
    background:'white',
    color:'black',
    fontSize:'20px',
    width:'0.5rem',
    height:'1.5rem',
    margin:'0px',
    padding:"0.5rem 0.7rem 0.5rem 0.7rem",
    borderWidth: '0px',
    borderColor: 'red',
    borderStyle: 'dashed',
}
export const row3=(num:number)=>{
    return(
        <div className="item" style={massFixedCss}>
            {num>0?num:" "}
        </div>
    );
};
export const Grid3x3=()=>{
    const [gridNums,setGridNums]=useState<number[]>([...Array<number>(9)].map(()=>0));//  初期値は全て-1
    useEffect(()=>{
        
        const initialNums:number[]=[...Array<number>(9)].map(()=>-1);
        
        
    },[]);
    const row3=(num:number)=>{
        return(
            <div className="item" style={massFixedCss}>
                {num>0?num:" "}
            </div>
        );
    };
    return(
        <div style={{ borderWidth:"0.3px",
        borderStyle:"solid",}}>
            <div className="container" style={rowStyle}>
                {row3(gridNums[0])}
                {row3(gridNums[1])}
                {row3(gridNums[2])}
            </div>
            <div className="container" style={rowStyle}>
                {row3(gridNums[3])}
                {row3(gridNums[4])}
                {row3(gridNums[5])}
            </div>
            <div className="container" style={rowStyle}>
                {row3(gridNums[6])}
                {row3(gridNums[7])}
                {row3(gridNums[8])}
            </div>
        </div>
    );
}