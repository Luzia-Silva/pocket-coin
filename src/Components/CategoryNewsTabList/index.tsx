import { Grid, Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react'
import { useState } from 'react'
import { INews, IUser } from '../../interface'
import { queries } from '../../services/queries'
import CardNews from '../CardNews'
import Title from '../Title'

type Props = {
  user: IUser
  newsAll: INews[]
}
const CategoryNewsTabList = ({ user, newsAll }: Props) => {
  const [newsRead, setNewsRead] = useState<String>('')

  const newsReadUser: INews[] = []
  newsAll?.forEach((newsCategory) => {
    if (user?.category?.includes(newsCategory?.category)) {
      newsReadUser.push(newsCategory)
    }
  })
  const filterNews = newsReadUser.filter((news) => news.category === newsRead)
  function handleClickNews(props: string) {
    setNewsRead(props)
  }
  return (
    <>
      <Title title={'Notícias relacionadas a sua preferência'} />
      <Tabs variant='soft-rounded' colorScheme='purple' isLazy m={2}>
        <TabList>
          <Tab onClick={() => handleClickNews('')}>Todas</Tab>
          {user.category?.map((category, index) => (
            <Tab key={index} onClick={() => handleClickNews(category)}>
              {category}
            </Tab>
          ))}
        </TabList>
        {!newsRead ? (
          <TabPanels flexDirection={['column', 'row']} p={2} hidden={false}>
            <Grid
              templateColumns={{
                base: 'repeat(1,1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
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
                lg: 'repeat(3, 1fr)',
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
export default CategoryNewsTabList
