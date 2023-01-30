import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const GoogleMap = ({ latitude, longitude}) => {
    const url = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    return (
        <Box m='auto' w='100%' >
                <iframe style={{borderRadius:'15px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} width="100%" height='250px' id="gmap_canvas" src={url} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
             </iframe>
        </Box>
        
    )
};

export default GoogleMap;