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
            console.log(sort)
        sort[0]!=null &&( params._sort = x) && (params._order=y) 
        setSearchParams(params)
        
    },[starRating,setSearchParams,sort])

    return (
        <div>
            <div>
                <Box mt={['5px','10px','30px','40px']} border='1px solid black'>
                <Text fontSize='lg' as='u'>Sort by</Text>
                <Select border='1px solid skyblue' placeholder="Sort by" id="getItSort" onChange={handleChangeSort}>
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
            <Box mt={['5px','10px','30px','40px']} border='1px solid black'>
            <Text fontSize='lg' as='u'>Filter by star rating</Text>
            <Flex justifyContent='space-around' >
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
            </Flex>
            <div className="filter">
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Popular</Text>
            <div>
                <input type="checkbox" value="airportShuttle" />
                <label >Free Airport Shuttle</label>
            </div>
            <div>
                <input type="checkbox" value="aerocity"/>
                <label>Aerocity</label>
            </div>
            <div>
                <input type="checkbox" value="breakfast"/>
                <label >Breakfast Included</label>
            </div>
            <div>
                <input type="checkbox" value="freeCancel" />
                <label>Free Cancellation</label>
            </div>
            <div>
                <input type="checkbox" value="hotel"/>
                <label >Hotel</label>
            </div>
            </Box>
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Property Type</Text>
            <div>
                <input type="checkbox" value="hotel"/>
                <label>Hotel</label>
            </div>
            <div>
                <input type="checkbox" value="house"/>
                <label >House</label>
            </div>
            <div>
                <input type="checkbox" value="ApartHotel"/>
                <label>Apart Hotel</label>
            </div>
            <div>
                <input type="checkbox" value="Aprtment"/>
                <label >Apartment</label>
            </div>
            <div>
                <input type="checkbox" value="Villa"/>
                <label>Villa</label>
            </div>
            <div>
                <input type="checkbox" value="Condo"/>
                <label >Condo</label>
            </div>
            <div>
                <input type="checkbox" value="Hostel"/>
                <label>Hostel</label>
            </div>
            <div>
                <input type="checkbox" value="Agritourism"/>
                <label >Agritourism</label>
            </div>
            </Box>
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Payment Type</Text>
            <div>
                <input type="checkbox" value="fullyRefundable"/>
                <label>Fully refundable</label>
            </div>
            <div>
                <input type="checkbox" value="reserveNow"/>
                <label >Reserve now Pay Later</label>
            </div>
            </Box>
            
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Traveler Experience</Text>
            <div>
                <input type="checkbox" value="fullyRefundable"/>
                <label>Family friendly</label>
            </div>
            <div>
                <input type="checkbox" value="reserveNow"/>
                <label >Business friendly</label>
            </div>
            </Box>
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='ls' as='u'>Neighborhood</Text>
            <div>
                <input type="checkbox" value="delhi"/>
                <label>Delhi</label>
            </div>
            <div>
                <input type="checkbox" value="noida"/>
                <label >Noida</label>
            </div>
            <div>
                <input type="checkbox" value="aerocity"/>
                <label>Aerocity</label>
            </div>
            <div>
                <input type="checkbox" value="karolBagh"/>
                <label >Karol bagh</label>
            </div>
            </Box>
            
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='ls' as='u'>Meals Plan available</Text>
            <div>
                <input type="checkbox" value="breakfastAval"/>
                <label>Breakfast</label>
            </div>
            <div>
                <input type="checkbox" value="lunchAval"/>
                <label >Lunch</label>
            </div>
            <div>
                <input type="checkbox" value="dinnerAval"/>
                <label>Dinner</label>
            </div>
            <div>
                <input type="checkbox" value="AllAval"/>
                <label >All included</label>
            </div>
            </Box>
            
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='ls' as='u'>Amenities</Text>
            <div>
                <input type="checkbox" value="pool"/>
                <label>Pool</label>
            </div>
            <div>
                <input type="checkbox" value="hotTub"/>
                <label >Hot tub</label>
            </div>
            <div>
                <input type="checkbox" value="freeWifi"/>
                <label>Free wifi</label>
            </div>
            <div>
                <input type="checkbox" value="spa"/>
                <label >Spa</label>
            </div>
            <div>
                <input type="checkbox" value="PetFriendly"/>
                <label>Pet Friendly</label>
            </div>
            <div>
                <input type="checkbox" value="AirCondition"/>
                <label >Air Conditioned</label>
            </div>
            <div>
                <input type="checkbox" value="gym"/>
                <label>Gym</label>
            </div>
            <div>
                <input type="checkbox" value="restaurant"/>
                <label >Restaurant</label>
            </div>
            </Box>
            </div>
            
            
            
            </Box>
            
            
        </div>
    )
}
export default Filter