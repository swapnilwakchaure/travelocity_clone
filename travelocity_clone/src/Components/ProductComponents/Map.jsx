import { Box } from "@chakra-ui/react"

function Map(){
    return (
        <Box m='auto' w='100%' mt='40px'>
                <iframe style={{borderRadius:'15px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} width="100%" height="auto" id="gmap_canvas" src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
             </iframe>
        </Box>
        
    )
}

export default Map