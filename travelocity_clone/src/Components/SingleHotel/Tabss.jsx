import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Overview from './Overview'
import Rooms from './Rooms'
import Location from './Location'
const Tabss = ({item}) => {
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
      <Overview item={item}/>
    </TabPanel>
    <TabPanel>
      <Rooms item={item}/>
    </TabPanel>
    <TabPanel>
      <Location item={item} />
    </TabPanel>
    
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Tabss
