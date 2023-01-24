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
export const Grid3x3=()=>{
    return(
        <div style={{ borderWidth:"0.3px",
        borderStyle:"solid",}}>
            <div className="container" style={rowStyle}>
                <div className="item" style={massFixedCss}>1</div>
                <div className="item" style={massFixedCss}>2</div>
                <div className="item" style={massFixedCss}>3</div>
            </div>
            <div className="container" style={rowStyle}>
                <div className="item" style={massFixedCss}>1</div>
                <div className="item" style={massFixedCss}>2</div>
                <div className="item" style={massFixedCss}>3</div>
            </div>
            <div className="container" style={rowStyle}>
                <div className="item" style={massFixedCss}>1</div>
                <div className="item" style={massFixedCss}>2</div>
                <div className="item" style={massFixedCss}>3</div>
            </div>
        </div>
    );
}