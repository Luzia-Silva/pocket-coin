import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const Nav = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#7049c3',
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  return (
    <>
      <Box bg='#7049c3' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <HStack spacing={10}>
              <Button
                colorScheme='blackAlpha'
                onClick={() => router.push('/signup')}
                borderRadius={50}
              >
                Cadastro
              </Button>
              <Link href='/login' color='white'>
                | Login
              </Link>
              <Link href='/' color='white'>
                | Home
              </Link>
            </HStack>
          </Box>
          <Flex>
            <Stack direction={'row'} spacing={7}>
              <Text
                textAlign='right'
                fontSize={'1.5rem'}
                color='white'
                fontWeight='bold'
              >
                Pocket Coin
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
