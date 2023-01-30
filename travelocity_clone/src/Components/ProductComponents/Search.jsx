import { useState } from "react";
import { useFetch } from './../../Hooks/useFetch'
import './search.css'
import {Box,Input, List, ListItem, Popover, PopoverBody, PopoverContent, PopoverHeader, useDisclosure} from '@chakra-ui/react';
import { PopoverTrigger } from '@chakra-ui/react';

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [country,setCountry] = useState("")     
    const {loading,data,error} = useFetch(`https://hotel-api-jsonserver1.onrender.com/data?q=${country}&_limit=5`)                                    

    const changehandle = (e)=> {
        setCountry(e.target.value)
          
    }

    return (
        <div className="search">
            <Box mt='40px'>
            <div>
            <PopoverTrigger>
            <Input
            type="text"
            value={country}
            onChange={changehandle}
            onFocus={onOpen}
            onBlur={onClose}
          />
          </PopoverTrigger>
          <Popover
        placement="bottom-start"
        isOpen={isOpen && data.length > 0}
        onClose={onClose}
      >
        <PopoverContent zIndex={4}>
          <PopoverHeader>Suggestions</PopoverHeader>
          <PopoverBody>
            <List>
              {data.map(suggestion => (
                <ListItem
                  key={suggestion}
                >
                  {suggestion.name}
                </ListItem>
              ))}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
                {loading && "Loading...."}
                {!loading && data && data.map((item)=><div key={item.id}>{item.name}</div>)}
            </div>
            </Box>
        </div>
        
        
    )
}

export default Search;
