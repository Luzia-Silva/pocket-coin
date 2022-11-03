import { Container, Flex, Grid } from '@chakra-ui/react'
import { queries } from '../../services/queries'

import CardNews from '../CardNews'
import Title from '../Title'

const AllNews = () => {
  const { data: newsAll } = queries.GetNews()
  console.log(newsAll)
  return (
    <Container maxW='container.xl' p={4} centerContent>
      <Title title={'Principais notícias do cenário econômico'} />
      <Flex direction={['column', 'row']} p={2} hidden={false}>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          }}
          gap={4}
        >
          {newsAll?.map((news, index) => (
            <CardNews key={index} title={news.title} link={news.link} />
          ))}
        </Grid>
      </Flex>
    </Container>
  )
}
export default AllNews
