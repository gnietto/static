import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Fvarela from './Fvarela';
import Doctecnica from './Doctecnica';

function App() {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Tributo</Tab>
          <Tab>Doc Técnica</Tab>
          <Tab>Encuesta</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Fvarela />
          </TabPanel>
          <TabPanel>
            <Doctecnica />
          </TabPanel>
          <TabPanel>Tres</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
