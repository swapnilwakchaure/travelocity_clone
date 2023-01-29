import React, { useEffect, useState } from "react";
import {getData} from './../../Redux/GetDataReducer/action'
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./../../Components/ProductComponents/SingleProduct";
import Filter from "./../../Components/ProductComponents/Filter";
import { useSearchParams,useLocation } from "react-router-dom";
import Search from "./../../Components/ProductComponents/Search";
import Map from "./../../Components/ProductComponents/Map";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Products(){
    const dispatch = useDispatch()
    const hotel = useSelector(store=>store.GetDataReducer.hotel)
    let location = useLocation()
    const [searchParams] = useSearchParams()
    const [sorting,setSorting] = useState('')
    const [ordering,setOrdering] = useState('')
    

    useEffect(()=> {
        
        if(location || hotel.length===0){
            let getParams = {}
             let sortBysort = searchParams.get('_sort') || ""
             if(sortBysort == 'undefined'){
                sortBysort = ''
             }
             const sortByorder = searchParams.get('_order') || ""
            getParams = {
                params:{
                    starRating:searchParams.getAll('starRating'),
                    _sort:sortBysort ,
                    _order:sortByorder,
                }
            }
                dispatch(getData(getParams))
        }
    },[hotel.length,dispatch, location.search])
    
    return (
        <div>
            <Box w='90%' m="auto">
            <Flex m='auto'  gap='6%' direction={['column','column','row','row']}>
                <Box m='auto' mt='2%' w={['90%','90%','24%','24%']} sx={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} p='5'>
                    <div>
                        <Map/>
                        <Search/>
                        <Filter/>    
                    </div>
                </Box>
                <Box m='auto' w={['90%','90%','70%','70%']}>
                    <div>
                        {console.log(hotel)}
                        {hotel.length>0 && hotel.map(item=>{
                            return <SingleProduct key={item.id} item={item}/>
                        })}
                    </div>
                </Box>
            
            </Flex>
            </Box>
            
            
        </div>      
    )
 }
 export default Products