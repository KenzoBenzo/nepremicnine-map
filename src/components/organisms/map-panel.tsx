import React, { ReactNode, useEffect } from 'react';
import { BoxProps } from '@chakra-ui/react';
import { MotionBox } from '@atoms/motion';
import {
  HTMLMotionProps,
  MotionProps,
  useMotionValue,
  useTransform,
} from 'framer-motion';

const PanelContainer = ({
  children,
  min,
  side,
}: { children: ReactNode; min: number; side?: 'left' | 'right' } & BoxProps &
  MotionProps) => {
  return (
    <MotionBox
      position="fixed"
      top={0}
      sx={{
        left: side === 'left' ? 0 : null,
        right: side === 'right' ? 0 : null,
      }}
      width={`${min}px`}
      h="100%"
      minH="100vh"
      backgroundColor="gray.100"
      borderLeft={side === 'right' ? '1px solid' : null}
      borderRight={side === 'left' ? '1px solid' : null}
      overflow="hidden"
    >
      {children}
    </MotionBox>
  );
};

const DragHandle = ({
  min,
  max,
  side,
}: { min: number; max: number; side?: 'left' | 'right' } & MotionProps &
  BoxProps) => {
  return (
    <MotionBox
      position="fixed"
      top={0}
      sx={side === 'left' ? { left: min - 3 } : { right: min - 3 }}
      h="100%"
      w="5px"
      cursor="col-resize"
      backgroundColor="transparent"
      transition="background-color 0.1"
      drag="x"
      dragElastic={0.025}
      dragConstraints={{
        left: min - max,
      }}
      dragMomentum={false}
      variants={{
        active: {
          backgroundColor: 'rgba(0,0,0,.2)',
        },
      }}
      whileTap="active"
      whileHover="active"
    />
  );
};

type MapPanelProps = HTMLMotionProps<'div'> & {
  min?: number;
  max?: number;
  side?: 'left' | 'right';
};

const MapPanel = ({
  children,
  side = 'right',
  min = 280,
  max = 600,
}: MapPanelProps) => {
  // A motion value for the handles x-axis offset
  const mvOffset = useMotionValue(0);

  // A motion value for the width of the panel, based on the offset value
  const mvWidth = useTransform(mvOffset, (v) =>
    side === 'left' ? v + min : min - v
  );

  const startResizing = () => {
    // Set the global cursor
    document.body.style.cursor = 'col-resize';
  };

  const stopResizing = () => {
    // Reset the cursor
    document.body.style.cursor = 'default';

    // Save to local storage—be sure to save a clamped value!
    const offset = Math.max(0, Math.min(max - min, mvOffset.get()));
    localStorage.setItem(`${side}_sidebar_offset`, JSON.stringify({ offset }));
  };

  // On first mount, load a saved offset (if we have one)
  useEffect(() => {
    const saved = localStorage.getItem(`${side}_sidebar_offset`);
    if (saved !== null) {
      mvOffset.set(JSON.parse(saved).offset);
    }
  }, [side, mvOffset]);

  return (
    <>
      <PanelContainer min={min} side={side} style={{ x: mvWidth }}>
        <DragHandle
          side={side}
          min={min}
          max={max}
          style={{ x: mvOffset }}
          onPointerDown={startResizing}
          onPointerUp={stopResizing}
          onPanEnd={stopResizing}
          onTap={stopResizing}
        />
        {children}
      </PanelContainer>
    </>
  );
};

export default MapPanel;
