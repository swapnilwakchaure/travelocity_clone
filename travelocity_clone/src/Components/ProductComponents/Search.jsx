import { useState } from "react";
import { useFetch } from './../../Hooks/useFetch'

const Search = () => {

    const [country,setCountry] = useState("")     
    const {loading,data,error} = useFetch(`http://localhost:8080/data?q=${country}&_limit=5`)                                    

    const changehandle = (e)=> {
        setCountry(e.target.value)
          
    }

    return (
        <div>
            <input type="text" value={country} onChange={changehandle} />
            {loading && "Loading...."}
            {!loading && data && data.map((item)=><div key={item.hotelId}>{item.name}</div>)}
        </div>
    )
}

export default Search;
