import { checkGridNum } from "./Grid3x3";

test("3x3のグリッド内で判定",()=>{
    const exampleNums:number[]=[1,3,4,0,1,5,6,0,9];
    const result=checkGridNum(exampleNums);
    expect(result).toBe(false);
});