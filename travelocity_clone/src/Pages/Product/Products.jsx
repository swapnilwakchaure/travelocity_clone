import React, { useEffect, useState } from "react";
import {getData} from './../../Redux/GetDataReducer/action'
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./../../Components/ProductComponents/SingleProduct";
import Filter from "./../../Components/ProductComponents/Filter";
import { useSearchParams,useLocation } from "react-router-dom";
import Search from "./../../Components/ProductComponents/Search";
import Map from "./../../Components/ProductComponents/Map";
import { Box, Flex } from "@chakra-ui/react";

 function Products(){
    const dispatch = useDispatch()
    const hotel = useSelector(store=>store.GetDataReducer.hotel)
    let location = useLocation()
    const [searchParams] = useSearchParams()
    const [sorting,setSorting] = useState('')
    const [ordering,setOrdering] = useState('')
    

    useEffect(()=> {
        if(location || hotel.length===0){
            const sortBy = searchParams.get('sort') || ""
            if(sortBy.includes('starRating') && sortBy.includes('asc')){
                setSorting('starRating')
                setOrdering('asc')
            }else if(sortBy.includes('starRating') && sortBy.includes('desc')){
                setSorting('starRating')
                setOrdering('desc')
            }else if (sortBy.includes('price') && sortBy.includes('asc')){
                setSorting('price')
                setOrdering('asc')
            }else if(sortBy.includes('price') && sortBy.includes('desc')){
                setSorting('price')
                setOrdering('desc')
            }
            const getParams = {
                params:{
                    starRating:searchParams.getAll('starRating'),
                    _sort:sorting ,
                    _order:ordering,
                }
            }
            dispatch(getData(getParams))
        }
    },[hotel.length,dispatch, location.search])
    
    return (
        <div>
            <Flex  gap='2'>
                <Box w='24%' border='1px solid black'>
                    <div>
                        <Map/>
                        <Search/>
                        <Filter/>    
                    </div>
                </Box>
                <Box w='60%' border='1px solid black'>
                    <div>
                        {hotel.length>0 && hotel.map(item=>{
                            return <SingleProduct key={item.hotelId} item={item}/>
                        })}
                    </div>
                </Box>
            
            </Flex>
            
        </div>      
    )
 }
 export default Products