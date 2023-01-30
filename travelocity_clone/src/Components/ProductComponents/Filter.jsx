import { useEffect } from "react"
import './filter.css'
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import {Box, Flex, Text, Select} from '@chakra-ui/react'


const Filter = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    const initialState = searchParams.getAll('starRating')
    const  initialSorting = () => {
        if(searchParams.getAll('_sort')==='undefined' && searchParams.getAll('_order')==null){
            return ['','']
        }else{
            return [searchParams.get('_sort'),searchParams.get('_order')]
        }
        
    }
    const initialSort = initialSorting()
    const [starRating,setStarRating] = useState(initialState || [])
    const [sort, setSort] = useState([initialSort[0],initialSort[1]] || [])
    
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
        let x;
        let y;
        if(sort.includes('starRating') && sort.includes('asc')){
                 x = 'starRating'
                y = 'asc'
            }else if(sort.includes('starRating') && sort.includes('desc')){
                x = 'starRating'
                y = 'desc'
            }else if (sort.includes('price') && sort.includes('asc')){
                x = 'price'
                y = 'asc'
            }else if(sort.includes('price') && sort.includes('desc')){
                x = 'price'
                y = 'desc'
            }else if(sort[0]==null){
                x = ''
                y = ''
            }
        sort[0]!=null &&( params._sort = x) && (params._order=y) 
        setSearchParams(params)
        
    },[starRating,setSearchParams,sort])

    return (
        <div>
            <div>
                <Box mt={['5px','10px','30px','40px']}>
                <Text fontSize='lg' as='u'>Sort by</Text>
                <Select mt='2' border='1px solid skyblue' placeholder="Sort by" id="getItSort" onChange={handleChangeSort}>
                    <optgroup label="By price">
                        <option value={['price','asc']}>Low to High</option>
                        <option value={['price','desc']}>High to Low</option>
                    </optgroup>
                    <optgroup label="By star">
                    <option value={['starRating','asc']}>Low to High</option>
                    <option value={['starRating','desc']}>High to Low</option>
                    </optgroup>
                    
                </Select>
                </Box>
                
                
            </div>
            <Box mt={['5px','10px','30px','40px']}>
            <Text fontSize='lg' as='u'>Filter by star rating</Text>
            <Flex justifyContent='space-around' >
            <div>
                <input type="checkbox" value="2" checked={starRating.includes('2')} onChange={handleFilterCheckbox} />
                <label style={{marginLeft:'5px'}} >2</label>
            </div>
            <div>
                <input type="checkbox" value="3" checked={starRating.includes('3')} onChange={handleFilterCheckbox}/>
                <label style={{marginLeft:'5px'}}>3</label>
            </div>
            <div>
                <input type="checkbox" value="4" checked={starRating.includes('4')} onChange={handleFilterCheckbox}/>
                <label style={{marginLeft:'5px'}} >4</label>
            </div>
            <div>
                <input type="checkbox" value="5" checked={starRating.includes('5')} onChange={handleFilterCheckbox}/>
                <label style={{marginLeft:'5px'}}>5</label>
            </div>
            </Flex>
            {/* <div className="filter">
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='ls' as='u'>Amenities</Text>
            <div>
                <input type="checkbox" value="pool"/>
                <label style={{marginLeft:'5px'}}>Pool</label>
            </div>
            <div>
                <input type="checkbox" value="hotTub"/>
                <label style={{marginLeft:'5px'}} >Hot tub</label>
            </div>
            <div>
                <input type="checkbox" value="freeWifi"/>
                <label style={{marginLeft:'5px'}}>Free wifi</label>
            </div>
            <div>
                <input type="checkbox" value="spa"/>
                <label style={{marginLeft:'5px'}} >Spa</label>
            </div>
            <div>
                <input type="checkbox" value="PetFriendly"/>
                <label style={{marginLeft:'5px'}}>Pet Friendly</label>
            </div>
            <div>
                <input type="checkbox" value="AirCondition"/>
                <label style={{marginLeft:'5px'}} >Air Conditioned</label>
            </div>
            <div>
                <input type="checkbox" value="gym"/>
                <label style={{marginLeft:'5px'}}>Gym</label>
            </div>
            <div>
                <input type="checkbox" value="restaurant"/>
                <label style={{marginLeft:'5px'}} >Restaurant</label>
            </div>
            </Box>
            </div> */}
            
            
            
            </Box>
            
            
        </div>
    )
}
export default Filter