import {useState} from "react";

function SearchBox(){

    const[search, setSearch]= useState("")

    return(

        <>
        <h2>Search Product:
        <input
        type="text" 
        value={search}
        onChange={(event)=> setSearch(event.target.value)}
        placeholder="Search Here"
        />
        </h2>
        

        {search !== "" && (
            <p>Searching for: {search}</p>
        )}

        </>
    )
}
export default SearchBox;