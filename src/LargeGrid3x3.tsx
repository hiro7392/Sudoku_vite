import { useEffect, useState } from "react"
import { Grid3x3 } from "./Grid3x3"

const largeGridStyle: React.CSSProperties = {
    display: "flex",
    borderWidth: "3px",
    borderStyle: "solid",
    flexDirection: "column",
}
const rowStyle: React.CSSProperties = {}
export const LargeGrid3x3 = () => {
    const [allNums, setAllNums] = useState<number[]>([])

    return (
        <div style={largeGridStyle}>
            <div
                style={{ display: "flex", backgroundColor: "blue" }}
                className="container"
            >
                <Grid3x3 />
                <Grid3x3 />
                <Grid3x3 />
            </div>
            <div style={{ display: "flex" }}>
                <Grid3x3 />
                <Grid3x3 />
                <Grid3x3 />
            </div>
            <div style={{ display: "flex" }}>
                <Grid3x3 />
                <Grid3x3 />
                <Grid3x3 />
            </div>
        </div>
    )
}
