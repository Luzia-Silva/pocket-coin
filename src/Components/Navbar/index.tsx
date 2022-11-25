import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box, Flex,
  HStack,
  IconButton,
  Link,
  Stack, useColorMode,
  useDisclosure
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import LoggedUser from '../LoggedUser'


type Props = {
  title: string
  link: string
}
const NavLink = ({ title, link }: Props) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'purple.500',
    }}
    color='white'
    href={link}
  >
    {title}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const { user } = useContext(AuthContext)

  const Links: Props[] = [
    {
      title: '| Cadastro',
      link: '/signup',
    },
    {
      title: '| Login',
      link: '/login',
    },
    {
      title: '| Home',
      link: '/',
    },
    {
      title: '| Gráficos',
      link: '/analytics',
    }
  ]
  return (
    <>
      <Box bg='#7049c3' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, index) => (
                <NavLink key={index} link={link.link} title={link.title} />
              ))}
            </HStack>
          </Box>
          <Flex>
            <Stack direction={'row'} spacing={7}>
              <Link
                textAlign='right'
                fontSize={'1.5rem'}
                color='white'
                fontWeight='bold'
                _hover={{
                  textDecoration: 'none',
                  bg: '',
                }}
                href={'/'}
              >
                Pocket Coin
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {user && <LoggedUser username={user?.name} email={user?.email} surname={user?.surname} />}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} bg='#7049c3'>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link, index) => (
              <NavLink key={index} link={link.link} title={link.title} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  )
}
