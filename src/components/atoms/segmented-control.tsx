import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import {
  Box,
  Button,
  ListItem,
  OrderedList,
  useColorModeValue,
} from '@chakra-ui/react';

const MotionListItem = motion(ListItem);
const MotionBox = motion(Box);

type SegmentedControlProps = {
  items: Array<string>;
  connected: boolean;
};

const SegmentedControl = ({
  items,
  connected,
}: SegmentedControlProps): JSX.Element => {
  const [activeItem, setActiveitem] = useState(0);
  const boxBackground = useColorModeValue('gray.100', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const inputBackground = useColorModeValue('white', 'gray.900');

  return (
    <AnimateSharedLayout>
      <OrderedList
        display="inline-flex"
        margin={0}
        padding="3px"
        listStyleType="none"
        borderTopRadius="10px"
        borderBottomRadius={connected ? '0px' : '10px'}
        backgroundColor={boxBackground}
      >
        {items.map((item, i) => {
          const isActive = i === activeItem;
          const isLastItem = i === items.length - 1;
          return (
            <MotionListItem
              position="relative"
              marginBottom="0"
              lineHeight="1"
              _after={
                isActive || i === activeItem - 1 || isLastItem
                  ? null
                  : {
                      position: 'absolute',
                      top: '15%',
                      right: '-0.5px',
                      display: 'block',
                      width: '1px',
                      height: '70%',
                      backgroundColor: borderColor,
                      transition: 'opacity 200ms ease-out',
                      content: '""',
                      opactiy: 1,
                    }
              }
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={item}
            >
              <Button
                onClick={() => setActiveitem(i)}
                position="relative"
                margin={0}
                padding="7px 30px"
                lineHeight="1"
                background="transparent"
                border="none"
                outline="none"
                _hover={{ cursor: 'pointer' }}
                _focus={{ cursor: 'pointer' }}
                _active={{ cursor: 'pointer' }}
              >
                {isActive && (
                  <MotionBox
                    layoutId="SegmentedControlActive"
                    position="absolute"
                    top="0"
                    right="0"
                    bottom="0"
                    left="0"
                    zIndex="1"
                    backgroundColor={inputBackground}
                    borderRadius="8px"
                    box-shadow="lg"
                    content="''"
                  />
                )}
                <span style={{ position: 'relative', zIndex: 2 }}>{item}</span>
              </Button>
            </MotionListItem>
          );
        })}
      </OrderedList>
    </AnimateSharedLayout>
  );
};

export default SegmentedControl;
