import React, { useEffect, useState } from "react";

const useFetch =(url) => {
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [error,setError] = useState(false)

    useEffect(()=>{
        fetch(url)
        .then((r)=>r.json())
        .then((r)=>{
            setData(r)
            setLoading(false)
        }).catch((e)=>{
            setError(true)
        })
    },[url])

    return{
        loading,data,error
    }
}

export {useFetch}