import { Box, Flex, Grid, Link } from '@chakra-ui/react'

type Props = {
  title: string
  link: string
}
const CardNews = ({ title, link }: Props) => {
  return (
    <Flex
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
      <Link href={link} textAlign='center' color={'gray.600'}>
        {title}
      </Link>
    </Flex>
  )
}
export default CardNews
