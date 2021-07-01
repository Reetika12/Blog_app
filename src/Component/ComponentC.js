import React from "react"
import {FirstName,SecondName} from "../App"
const ComponentC= ()=>{
    return (
        <div>
            <FirstName.Consumer>
            {(fname)=>{
                return(
                    <SecondName.Consumer>
                        {
                            (lname)=>{
                                return <h1>my first name is {fname} and SecondName is {lname}</h1>
                            }
                        }
                    </SecondName.Consumer>
                )
                
            }}
            </FirstName.Consumer>
            {/* <h1>hello friends!!!</h1> */}
         </div>
    );

}
export default ComponentC