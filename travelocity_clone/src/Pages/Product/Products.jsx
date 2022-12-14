import React, { useEffect } from "react";
import {getData} from '../Redux/action'
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";
import Search from "./Search";

 function Products(){
    const dispatch = useDispatch()
    const hotel = useSelector(store=>store.hotel)
    const [searchParams] = useSearchParams()
    

    useEffect(()=> {
        if(hotel.length===0){
            const sortBy = searchParams.get('sort')
            const getParams = {
                params:{
                    starRating:searchParams.getAll('starRating'),
                    _sort:sortBy && "starRating"
                }
            }
            dispatch(getData(getParams))
        }
    },[hotel.length,dispatch])

    return (
        <div>
            <div>
                <iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
            </div>
            <Search/>
            <Filter/>
            
            <div>
                {hotel.length>0 && hotel.map(item=>{
                    return <SingleProduct key={item.hotelId} item={item}/>
                })}
            </div>
        </div>      
    )
 }
 export default Products