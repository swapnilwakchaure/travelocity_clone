import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Overview from './Overview'
import Rooms from './Rooms'
import Location from './Location'
const Tabss = () => {
  return (
    <div style={{ width:"100%"}}>
      <Tabs size="lg" variant="unstyled">
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Overview</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Rooms</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Location</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <Overview/>
    </TabPanel>
    <TabPanel>
      <Rooms/>
    </TabPanel>
    <TabPanel>
      <Location/>
    </TabPanel>
    
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Tabss
