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
            <div className="filter">
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Popular</Text>
            <div>
                <input type="checkbox" value="airportShuttle" />
                <label  style={{marginLeft:'5px'}}>Free Airport Shuttle</label>
            </div>
            <div>
                <input type="checkbox" value="aerocity"/>
                <label style={{marginLeft:'5px'}}>Aerocity</label>
            </div>
            <div>
                <input type="checkbox" value="breakfast"/>
                <label  style={{marginLeft:'5px'}}>Breakfast Included</label>
            </div>
            <div>
                <input type="checkbox" value="freeCancel" />
                <label style={{marginLeft:'5px'}}>Free Cancellation</label>
            </div>
            <div>
                <input type="checkbox" value="hotel"/>
                <label  style={{marginLeft:'5px'}}>Hotel</label>
            </div>
            </Box>
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Property Type</Text>
            <div>
                <input type="checkbox" value="hotel"/>
                <label style={{marginLeft:'5px'}}>Hotel</label>
            </div>
            <div>
                <input type="checkbox" value="house"/>
                <label style={{marginLeft:'5px'}} >House</label>
            </div>
            <div>
                <input type="checkbox" value="ApartHotel"/>
                <label style={{marginLeft:'5px'}}>Apart Hotel</label>
            </div>
            <div>
                <input type="checkbox" value="Aprtment"/>
                <label style={{marginLeft:'5px'}} >Apartment</label>
            </div>
            <div>
                <input type="checkbox" value="Villa"/>
                <label style={{marginLeft:'5px'}}>Villa</label>
            </div>
            <div>
                <input type="checkbox" value="Condo"/>
                <label style={{marginLeft:'5px'}} >Condo</label>
            </div>
            <div>
                <input type="checkbox" value="Hostel"/>
                <label>Hostel</label>
            </div>
            <div>
                <input type="checkbox" value="Agritourism"/>
                <label style={{marginLeft:'5px'}} >Agritourism</label>
            </div>
            </Box>
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Payment Type</Text>
            <div>
                <input type="checkbox" value="fullyRefundable"/>
                <label style={{marginLeft:'5px'}}>Fully refundable</label>
            </div>
            <div>
                <input type="checkbox" value="reserveNow"/>
                <label style={{marginLeft:'5px'}} >Reserve now Pay Later</label>
            </div>
            </Box>
            
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='lg' as='u'>Traveler Experience</Text>
            <div>
                <input type="checkbox" value="fullyRefundable"/>
                <label style={{marginLeft:'5px'}}>Family friendly</label>
            </div>
            <div>
                <input type="checkbox" value="reserveNow"/>
                <label style={{marginLeft:'5px'}} >Business friendly</label>
            </div>
            </Box>
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='ls' as='u'>Neighborhood</Text>
            <div>
                <input type="checkbox" value="delhi"/>
                <label style={{marginLeft:'5px'}}>Delhi</label>
            </div>
            <div>
                <input type="checkbox" value="noida"/>
                <label style={{marginLeft:'5px'}} >Noida</label>
            </div>
            <div>
                <input type="checkbox" value="aerocity"/>
                <label style={{marginLeft:'5px'}}>Aerocity</label>
            </div>
            <div>
                <input type="checkbox" value="karolBagh"/>
                <label style={{marginLeft:'5px'}} >Karol bagh</label>
            </div>
            </Box>
            
            <Box w='70%' m='auto' mt='30px' textAlign='left'>
            <Text fontSize='ls' as='u'>Meals Plan available</Text>
            <div>
                <input type="checkbox" value="breakfastAval"/>
                <label style={{marginLeft:'5px'}}>Breakfast</label>
            </div>
            <div>
                <input type="checkbox" value="lunchAval"/>
                <label style={{marginLeft:'5px'}} >Lunch</label>
            </div>
            <div>
                <input type="checkbox" value="dinnerAval"/>
                <label style={{marginLeft:'5px'}}>Dinner</label>
            </div>
            <div>
                <input type="checkbox" value="AllAval"/>
                <label style={{marginLeft:'5px'}} >All included</label>
            </div>
            </Box>
            
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
            </div>
            
            
            
            </Box>
            
            
        </div>
    )
}
export default Filter