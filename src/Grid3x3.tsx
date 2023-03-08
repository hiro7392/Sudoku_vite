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
    borderWidth: '0.1px',
    borderColor: 'grey',
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
    //  各マスの表示,埋まっていないマスは空白にする
    const row3=(num:number)=>{
        return(
            <div className="item" style={massFixedCss}>
                {num>0?num:" "}
            </div>
        );
    };
    

    checkGridNum(gridNums);
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
//  3x3で被りがあればfalseを返す    
export const checkGridNum=(nums:number[])=>{
    let result=true;
    if(nums.length!==9)result=false;    //そもそも長さが違う
    
    //  被りがないか判定する
    let initialState:boolean[]=[...Array<boolean>(10)].map(()=>false);  //まだ見つかっていない状態はfalse
    console.log("判定",initialState)
    nums.map((n)=>{
        if(n===0)return;
        
        if(!initialState[n]){
            initialState[n]=true;
        }else{
            result=false;
        }
    });
    return result;
}