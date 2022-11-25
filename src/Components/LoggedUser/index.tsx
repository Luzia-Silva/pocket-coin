import {
  Avatar, Box, Button, Center, Flex, Link, Menu,
  MenuButton, MenuItem, MenuList, Stack,
  useColorMode, useDisclosure
} from '@chakra-ui/react'
import { destroyCookies } from '../../Context/AuthContext'

type Props = {
  username: string
  avatarUser?: string
  email: string
  surname?: string
}
const LoggedUser = ({ username, avatarUser, email, surname }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const defaultAvatar = 'https://avatars.dicebear.com/api/big-ears/your-custom-seed.svg?b=%23cc0ae6'
  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={avatarUser || defaultAvatar} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar size={'2xl'} src={avatarUser || defaultAvatar} />
                  </Center>
                  <br />
                  <Center>
                    <p>{username} {" - " + surname}</p>
                  </Center>
                  <Center>
                    <p>{email}</p>
                  </Center>
                  <br />

                  <Link href='/' onClick={() => destroyCookies()}>
                    <MenuItem>Sair</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default LoggedUser
