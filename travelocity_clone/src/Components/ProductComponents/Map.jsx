import { Box } from "@chakra-ui/react"

function Map(){
    return (
        <Box m='auto' w='100%' border='1px solid black' mt='40px'>
            <div>
                <iframe width="100%" height="auto" id="gmap_canvas" src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
             </iframe>
            </div>
        </Box>
        
    )
}

export default Map