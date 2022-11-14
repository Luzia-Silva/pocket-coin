import { Container, Flex, Grid } from '@chakra-ui/react'
import { queries } from '../../services/queries'
import CardNews from '../CardNews'
import Title from '../Title'

type Props = {
  news: { title: string; link: string }[]
}
const AllNews = ({ news }: Props) => {
  return (
    <Container maxW='container.xl' p={4} centerContent>
      <Title title={'Principais notícias do cenário econômico'} />
      <Flex direction={['column', 'row']} p={2} hidden={false}>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={4}
        >
          {news?.map((isNews, index) => (
            <CardNews key={index} title={isNews.title} link={isNews.link} />
          ))}
        </Grid>
      </Flex>
    </Container>
  )
}
export default AllNews
