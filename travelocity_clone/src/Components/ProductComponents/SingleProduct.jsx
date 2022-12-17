import { Box, Flex,Text } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleProduct = ({item}) => {
    return (
        <Box >
            <Flex mt='30px' gap={['1%','1%','2%','5%']} border='1px solid black' borderRadius='30px' direction={['column','column','column','row']}>
                <Box w={['90%','90%','90%','35%']} m='auto'>      
                    <Carousel infiniteLoop>
                    {item.images.map((slide) => {
                        return <Image src={slide.url} key={item.id} mt={['10px','10px','30px','30px']} boxSize='200px' />;
                    })}
                    </Carousel>            
                 </Box>
            <Box w={['90%','90%','90%','70%']} m='auto'>
            <div>
                <Text fontSize='lg' align='left' as='b'>
                {item.name}
                </Text>
                <Text>
                {item.address.city}
                </Text>
                <Flex direction={['column','row','row','row']}>
                    <Box w={['100%','50%','50%','50%']}>
                    <div>
                        <Text color='yellow.400'>{item.starRating} star</Text>
                        <Text color='green.500'>Fully refudable</Text>
                    </div>
                    </Box>
                    <Box w={['100%','50%','50%','50%']}>
                    <div>
                        <Text ><PhoneIcon/> {item.phoneNumbers}</Text>
                        <Text  as='b' >&#8377; {item.price}</Text>
                    </div>
                    </Box>
                    
                </Flex>
            <br/>
            <Text fontSize='xs'>{item.amenities[0].formatted+ "," + item.amenities[1].formatted+"& much more"}</Text>
            
            </div>
            </Box>
            
            </Flex>
            
            
        </Box>
    )
}
export default SingleProduct