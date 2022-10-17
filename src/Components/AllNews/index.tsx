import { Flex, Container, Grid, Link, GridItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { INews } from '../../interface'
import { GetNews } from '../../services/api/getNews'
import Title from '../Title'

const AllNews = () => {
  const { data: newsAll } = GetNews()
  console.log(newsAll)
  return (
    <Container maxW='container.xl' p={4} centerContent>
      <Title />
      <Flex direction={['column', 'row']} p={2} hidden={false}>
        <Grid
          templateColumns={{
            base: 'repeat(1,1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          }}
          gap={4}
        >
          {newsAll?.map(news => (
            <Flex
              key={news?.id}
              boxShadow={'lg'}
              maxW={'640px'}
              width={'full'}
              rounded={'xl'}
              p={5}
              justifyContent={'center'}
              position={'relative'}
              bg={'white'}
              border='2px solid #8376767a'
              text-align='center'
            >
              <Link href={news?.link} textAlign='center' color={'gray.600'}>
                {news?.title}
              </Link>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Container>
  )
}
export default AllNews
