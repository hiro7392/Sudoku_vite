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
    borderWidth: '0.5px',
    borderColor: 'red',
    borderStyle: 'dashed',
}
const tableCss:React.CSSProperties={
    padding:'0.5rem',
    backgroundColor:'white',
    tableLayout: 'fixed',
}

export const Board=()=>{
    const [blocks,setBlocks]=useState<Mass[][]>([]);
    const numsPercols:number=9;
    const css:React.CSSProperties=massCss;
    useEffect(()=>{
        setBlocks([]);
        let cnt:number=0;
        for(let i=0;i<9;i++){
            let tmp:Mass[]=[]
            //ランダムにとりあえず生成
            for(let k=0;k<9;k++){
                const tmpMass:Mass={
                    num:getRandomNum(),
                    isFixed:getRandomNum()%2===0,
                }
                tmp=[...tmp,tmpMass];
            }
            setBlocks((prev)=>([...prev,tmp]));
        }
    },[])
    return(
        <>
            <table style={tableCss}>
                <tbody>
                    {blocks.map((col,i)=>{
                        return(
                            <tr key={i} 
                                style={{border:"3px",
                                borderStyle:"solid",
                                borderWidth: '0.1px',}}
                            >
                                { col.map((block:Mass,index)=>{
                                    if(block===undefined){
                                        return(<td key={index+numsPercols*i}></td>);
                                    }else{
                                        return(
                                        <td key={index+numsPercols*i}>
                                            {
                                                block.isFixed?<div style={css}>{block.num}</div>
                                                :<div style={massFixedCss}>{block.num}</div>
                                            }
                                            
                                        </td>
                                        );
                                    }
                                })}
                            </tr>
                        );})
                    }   
                </tbody>
            </table>
        </>
    )
};