import { useState } from "react";
import InfoComponent from "./InfoComponent";
function TestComponent({ firstName, lastName, age }){
    const [count, setCount]= useState(0);   
    const Color =({color})=> <div>Hair color : {color}</div>;
    const[show, setShow] = useState(false);
    // const Color = ({color})=> <div>Hair color: {color}</div>;
    return(
        <div>
             <button onClick={()=>setShow(!show)}>Vizible</button>
            {show ? (
            <InfoComponent 
            height={185}
            weight={95}
            setCount={setCount}
            HairColor={Color}
            />
            ):null}
            
            <p>Count: {count}<button onClick={()=>setCount(count+1)}> +</button></p>
            <p>FirstName: {firstName}</p>
            <p>LastName: {lastName}</p>
            <p>Age: {age}</p>
            <Color color={"black"}/>
        </div>
    );
}
export default TestComponent;
