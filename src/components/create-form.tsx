import React from 'react';
import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  RadioProps,
  Stack,
  useRadio,
  useRadioGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { HouseIcon } from './icons';
import { transparentize } from '@chakra-ui/theme-tools';

function RadioCard(props: RadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const transparentEmerald = transparentize('emerald.200', 0.12);

  console.log(props)

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        direction="column"
        align="center"
        justify="space-between"
        cursor="pointer"
        borderWidth="2px"
        borderRadius="md"
        boxShadow="sm"
        _checked={{
          bg: transparentEmerald,
          color: 'emerald.600',
          borderColor: 'emerald.600',
        }}
        p={4}
        h="196px"
        w="288px"
      >
        {props.children}
        <Box
          boxSize={5}
          border="2px solid"
          borderRadius="full"
          d="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            boxSize={3}
            border="none"
            borderRadius="full"
            backgroundColor={props.isChecked ? "emerald.600" : 'transparent'}
          />
        </Box>
      </Flex>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
const PropertyRadio = () => {
  const options = ['House', 'Appartment', 'Land'];
  const fontColor = useColorModeValue('gray.700', 'white');

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'propertyType',
    defaultValue: 'House',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack spacing={8} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            <>
              {value === 'House' ? (
                <HouseIcon strokeWidth={2} mb={4} boxSize={8} />
              ) : value === 'Appartment' ? (
                <SunIcon strokeWidth={2} mb={4} boxSize={8} />
              ) : value === 'Land' ? (
                <SunIcon strokeWidth={2} mb={4} boxSize={8} />
              ) : null}
              <Text
                fontSize="xl"
                fontWeight="800"
                fontColor={fontColor}
                color="gray.900"
              >
                {value}
              </Text>
              {value === 'House' ? (
                <Text color="gray.700">
                  Detached, duplex, triplex, multiplex, etc
                </Text>
              ) : value === 'Appartment' ? (
                <Text>Studio, condominium, etc</Text>
              ) : null}
            </>
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export const CreatePropertyForm = () => {
  return (
    <Stack as="form" mt={12}>
      <Heading mb={6}>Create a new listing</Heading>
      <FormControl>
        <FormLabel>Property type</FormLabel>
        <PropertyRadio />
      </FormControl>
    </Stack>
  );
};
