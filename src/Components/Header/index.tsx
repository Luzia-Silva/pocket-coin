import { Box, Heading, Stack, Text } from '@chakra-ui/react'

type Title = {
  text: string
}

const Header = ({ text }: Title) => {
  return (
    <Box py={3} px={2}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack p={2} alignItems={'center'}>
          <Stack textAlign={'center'}>
            <Heading size={'lg'} color='#74787a'>
              Você consegue comprar com<Text color={'#6b46c1'}>R${text}</Text>
            </Heading>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Header
