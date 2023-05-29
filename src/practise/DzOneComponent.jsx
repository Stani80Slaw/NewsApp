import { useState } from "react";
import DzTwoComponent from "./DzTwoComponent";
// import DzTwoComponent from "./DzTwoComponent";
function DzOneComponent(){
    const[show, setShow] = useState(false)

    return(
    <div>

        <p> <button onClick={()=>setShow(!show)}>Vizible</button></p>
        <p>111: {count}</p>
        <DzTwoComponent/>
    </div>
    );
}

export default DzOneComponent;