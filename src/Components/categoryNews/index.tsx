import {
  Box,
  Button,
  Flex,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Stack,
  Center,
  ButtonGroup,
  Container
} from '@chakra-ui/react'
import e from 'express'
import { Key, useEffect, useState } from 'react'
import { capitalize } from 'vue'
import { INews } from '../../interface'
import { News, Users } from '../../mock'
import { queries } from '../../services/queries'
import CardNews from '../CardNews'
import Title from '../Title'

const CategoryNews = () => {
  const [newsRead, setNewsRead] = useState<String>('')
  const { data: newsAll } = queries.GetNews()

  const newsReadUser: INews[] = []
  newsAll?.forEach(newsCategory => {
    if (
      Users?.category?.includes(
        newsCategory?.category
      )
    ) {
      newsReadUser.push(newsCategory)
    }
  })
  const filterNews = newsReadUser.filter(news => news.category === newsRead)
  function handleClickNews(props: string) {
    setNewsRead(props)
  }
  
  return (
    <>
      <Title title={'Notícias relacionadas a sua preferência'} />
      <Tabs variant='soft-rounded' colorScheme='purple' isLazy m={2}>
        <TabList>
          <Tab onClick={() => handleClickNews('')}>Todas</Tab>
          {Users.category?.map(
            (category: string, index: Key | null | undefined) => (
              <Tab key={index} onClick={() => handleClickNews(category)}>
                {capitalize(category)}
              </Tab>
            )
          )}
        </TabList>
        {!newsRead ? (
          <TabPanels flexDirection={['column', 'row']} p={2} hidden={false}>
            <Grid
              templateColumns={{
                base: 'repeat(1,1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
              }}
              gap={4}
            >
              {newsReadUser.map((news, index) => (
                <CardNews key={index} title={news.title} link={news.link} />
              ))}
            </Grid>
          </TabPanels>
        ) : (
          <TabPanels flexDirection={['column', 'row']} p={2} hidden={false}>
            <Grid
              templateColumns={{
                base: 'repeat(1,1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
              }}
              gap={4}
            >
              {filterNews.map((news, index) => (
                <CardNews key={index} title={news.title} link={news.link} />
              ))}
            </Grid>
          </TabPanels>
        )}
      </Tabs>
    </>
  )
}
export default CategoryNews
