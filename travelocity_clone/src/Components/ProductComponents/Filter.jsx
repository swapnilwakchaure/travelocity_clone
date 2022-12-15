import { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"


const Filter = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    const initialState = searchParams.getAll('starRating')
    const [starRating,setStarRating] = useState(initialState || [])
    const [sort, setSort] = useState([])

    const handleFilterCheckbox = (e)=> {
        let updateCategory = [...initialState]
        if(updateCategory.includes(e.target.value)){
            updateCategory.splice(updateCategory.indexOf(e.target.value),1)
        }else{
            updateCategory.push(e.target.value)
        }
        setStarRating(updateCategory)
    }
    const handleChangeSort=(e)=>{
        setSort(e.target.value)
    }

    useEffect(()=>{
        let params = {}
        params.starRating = starRating;
        sort &&( params.sort = sort )
        setSearchParams(params)
        console.log(searchParams.get('sort'))
        
    },[starRating,setSearchParams,sort])

    return (
        <div>
            <p>Filter by star rating</p>
            <div>
                <input type="checkbox" value="2" checked={starRating.includes('2')} onChange={handleFilterCheckbox}/>
                <label >2</label>
            </div>
            <div>
                <input type="checkbox" value="3" checked={starRating.includes('3')} onChange={handleFilterCheckbox}/>
                <label>3</label>
            </div>
            <div>
                <input type="checkbox" value="4" checked={starRating.includes('4')} onChange={handleFilterCheckbox}/>
                <label >4</label>
            </div>
            <div>
                <input type="checkbox" value="5" checked={starRating.includes('5')} onChange={handleFilterCheckbox}/>
                <label>5</label>
            </div>
            <div>
                <select name="Sort by" id="getItSort" onChange={handleChangeSort}>
                    <optgroup label="By price">
                        <option value={['price','asc']}>Low to High</option>
                        <option value={['price','desc']}>High to Low</option>
                    </optgroup>
                    <optgroup label="By star">
                    <option value={['starRating','asc']}>Low to High</option>
                    <option value={['starRating','desc']}>High to Low</option>
                    </optgroup>
                    
                </select>
                
            </div>
        </div>
    )
}
export default Filter