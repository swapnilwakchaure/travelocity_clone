import { useState } from "react";
import { useFetch } from './../../Hooks/useFetch'
import './search.css'
import {Box,Input} from '@chakra-ui/react';

const Search = () => {

    const [country,setCountry] = useState("")     
    const {loading,data,error} = useFetch(`http://localhost:8080/data?q=${country}&_limit=5`)                                    

    const changehandle = (e)=> {
        setCountry(e.target.value)
          
    }

    return (
        <div className="search">
            <Box mt='40px'>
            <div>
                
                <Input placeholder="Search" type="text" value={country} onChange={changehandle} />
                
                
                {loading && "Loading...."}
                {!loading && data && data.map((item)=><div key={item.id}>{item.name}</div>)}
            </div>
            </Box>
        </div>
        
        
    )
}

export default Search;
