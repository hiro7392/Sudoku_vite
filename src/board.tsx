import { useEffect, useState } from "react"
import { Block,Mass} from "./block";

const getRandomNum=()=>{
    const min = 1 ;
    const max = 9 ;
    const  a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    return a;
}
const massCss:React.CSSProperties={
    background:'white',
    color:'blue',
    fontSize:'20px',
    margin:"0.01rem",

    padding:"0.3rem",
    width: '0.3rem',
}

const massFixedCss:React.CSSProperties={
    background:'white',
    color:'grey',
    fontSize:'20px',
    margin:"0.01rem",
    padding:"0.3rem",
    width: '0.3rem',
}

export const Board=()=>{
    const [blocks,setBlocks]=useState<Mass[]>([]);
    useEffect(()=>{
        setBlocks([]);
        let cnt:number=0;
        for(let i=0;i<81;i++){
            const tmpMass:Mass={
                num:getRandomNum(),
                isFixed:getRandomNum()%2===0,
            }
            setBlocks((prev)=>([...prev,tmpMass]))
        }
    },[])
    return(
        <>
            {
                blocks.map((block,index)=>{
                    let css:React.CSSProperties=massCss;
                    css=((block.num%2)==0)? massCss:massFixedCss;
                    if(index%9===8){
                        return(
                            <a style={css}>{block.num}<br></br></a>
                        )
                    }
                    else{
                        return(
                            <a style={css}>{block.num}</a>
                        )
                    }
                })
            }
        </>
    )
};