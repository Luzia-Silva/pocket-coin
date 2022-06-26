import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex, Link, Stack,
  useColorMode, useColorModeValue, useDisclosure, Image, IconButton, Avatar, Text
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Navbar = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#7049c3',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg='#7049c3' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link href={'/'}>
              <Avatar bg='#e8e7e7' icon={<ArrowBackIcon fontSize='1.5rem' />} />
            </Link>
          </Box>
          <Flex >
            <Stack direction={'row'} spacing={7}>
             <Text textAlign="right"
            fontSize={'1.5rem'}
            color='white'
            fontWeight="bold">
            Pocket Coin
        </Text>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}