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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import {
  AppartmentIcon,
  CompassIcon,
  DrawingPinIcon,
  HouseIcon,
} from './icons';
import { transparentize } from '@chakra-ui/theme-tools';

function RadioCard(props: RadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const transparentEmerald = transparentize('emerald.200', 0.12);
  const emeraldAccent = useColorModeValue('emerald.600', 'emerald.400');

  console.log(props);

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
          color: emeraldAccent,
          borderColor: emeraldAccent,
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
            backgroundColor={props.isChecked ? emeraldAccent : 'transparent'}
          />
        </Box>
      </Flex>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
const PropertyRadio = () => {
  const options = ['House', 'Appartment', 'Land'];
  const subTextColor = useColorModeValue('gray.700', 'gray.300');
  const headingColor = useColorModeValue('gray.900', 'white');

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
                <AppartmentIcon strokeWidth={2} mb={4} boxSize={8} />
              ) : value === 'Land' ? (
                <CompassIcon strokeWidth={2} mb={4} boxSize={8} />
              ) : null}
              <Text fontSize="xl" fontWeight="800" color={headingColor}>
                {value}
              </Text>
              {value === 'House' ? (
                <Text color={subTextColor} textAlign="center">
                  Detached, duplex, triplex, etc
                </Text>
              ) : value === 'Appartment' ? (
                <Text color={subTextColor} textAlign="center">
                  Studio, condominium, etc
                </Text>
              ) : value === 'Land' ? (
                <Text color={subTextColor} textAlign="center">
                  Residential, farm, investment, etc
                </Text>
              ) : null}
            </>
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export const CreatePropertyForm = () => {
  const tertiaryColor = useColorModeValue('gray.400', 'gray.600');
  return (
    <Stack as="form" mt={12} spacing={8}>
      <Heading mb={6}>Create a new listing</Heading>
      <FormControl>
        <FormLabel>Property type</FormLabel>
        <PropertyRadio />
      </FormControl>
      <HStack>
        <FormControl>
          <FormLabel>Total price</FormLabel>
          <NumberInput
            mr="2rem"
            min={1000}
            max={1000000}
            step={1000}
            defaultValue={10000}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>
            Price / m²{' '}
            <Box as="span" color={tertiaryColor} fontStyle="italic" ml={2}>
              optional
            </Box>
          </FormLabel>
          <NumberInput
            mr="2rem"
            min={1000}
            max={1000000}
            step={1000}
            defaultValue={100}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </HStack>

      <FormControl>
        <FormLabel>Where is this property located?</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<DrawingPinIcon />}
          />
          <Input type="address" placeholder="Start typing an address" />
        </InputGroup>
      </FormControl>
    </Stack>
  );
};
