function InfoComponent({height, weight, setCount, HairColor}){
    return(
        <div>
            {/* <button onClick={()=> setCount(100)}>set 100</button>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <HairColor color="red"/> */}
            <button onClick={()=>setCount(100)}> Set 100</button>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <HairColor color='red'/>
        </div>
    );
}

export default InfoComponent;