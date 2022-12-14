import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Tabss = () => {
  return (
    <div>
      <Tabs size="lg" variant="unstyled">
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>One</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Two</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Three</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>four</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>five</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    <TabPanel>
      <p>four!</p>
    </TabPanel>
    <TabPanel>
      <p>five!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Tabss
