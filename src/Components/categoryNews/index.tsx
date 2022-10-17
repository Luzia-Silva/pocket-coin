import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { News } from "../../mock"
import { GetNews } from "../../services/api/getNews"

const CategoryNews = () => {

  return (
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList>
        <Tab>Tab 1</Tab>
        
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
export default CategoryNews