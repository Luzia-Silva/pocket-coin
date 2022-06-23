import {
  Box,
  Flex, Link, Stack,
  useColorMode, useColorModeValue, useDisclosure, Image
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
            <Image
            boxSize="170px"
            src='../../coin.svg'
            alt='Dan Abramov'/>
            </Link>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}