import { Grid3x3 } from "./Grid3x3";

const largeGridStyle={
    display:"flex",
    borderWidth:"3px",
    borderStyle:"solid",
    flexDirection:"column",
};
export const LargeGrid3x3=()=>{
    return(
        <div style={largeGridStyle}>
            <div style={{display:"flex"}}className="container">
                <Grid3x3/>
                <Grid3x3/>
                <Grid3x3/>
            </div>
            <div style={{display:"flex"}}>
                <Grid3x3/>
                <Grid3x3/>
                <Grid3x3/>
            </div>
            <div style={{display:"flex"}}>
                <Grid3x3/>
                <Grid3x3/>
                <Grid3x3/>
            </div>
        </div>
    );
}