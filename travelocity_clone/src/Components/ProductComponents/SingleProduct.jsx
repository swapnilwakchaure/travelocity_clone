import { Box, Flex,Text } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const SingleProduct = ({item}) => {
    return (
        <div>
            <Flex mt='30px' gap='5%'>
                <Box w='20%'>     
                    <Carousel infiniteLoop>
                    {item.images.map((slide) => {
                        return <Image src={slide.url} height="auto" width="100px" />;
                    })}
                    </Carousel>            
                 </Box>
            <Box w='75%' border='1px solid black' >
            <div>
                <Text fontSize='lg' align='left' as='b'>
                {item.name}
                </Text>
                <Text>
                {item.address.city}
                </Text>
                <Flex>
                    <Box w='50%'>
                    <div>
                        <Text color='yellow.400'>{item.starRating} star</Text>
                        <Text color='green.500'>Fully refudable</Text>
                    </div>
                    </Box>
                    <Box w='50%'>
                    <div>
                        <Text><PhoneIcon/> {item.phoneNumbers}</Text>
                        <Text as='b' >&#8377; {item.price}</Text>
                    </div>
                    </Box>
                    
                </Flex>
            <br/>
            <Text fontSize='xs'>{item.amenities[0].formatted+ "," + item.amenities[1].formatted+"& much more"}</Text>
            
            </div>
            </Box>
            
            </Flex>
            
            
        </div>
    )
}
export default SingleProduct