import {
  Box,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={3} px={2} >
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={2}
          alignItems={'center'}>
          <Stack
            textAlign={'center'}>
            <Heading size={'lg'}>
              Você consegue comprar com<Text color={'green.500'}>R$100</Text>
            </Heading>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;