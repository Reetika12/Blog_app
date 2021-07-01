import React from "react"
import ComponentB from "./ComponentB"

function sum(){
    let arr=[4,5,6,7];
    console.log(arr)
}
const ComponentA = ()=>{
    return (
        <div>
            <ComponentB/>
        </div>
    );

}
export default ComponentA