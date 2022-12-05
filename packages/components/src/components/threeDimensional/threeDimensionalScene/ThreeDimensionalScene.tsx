import { Box } from '@chakra-ui/react';
import React, { FC, useEffect, useRef } from 'react';
import { useWorld } from '../../../threeDimensional/scenes/World';
import { ThreeDimensionalSceneProps } from './types';

const formattedBoxProps = (props: ThreeDimensionalSceneProps) => {
  const boxProps = { ...props };
  delete boxProps.backgroundColor;
  return boxProps;
}


export const ThreeDimensionalScene: FC<ThreeDimensionalSceneProps> = (props) => {
  const boxProps = formattedBoxProps(props);
  const sceneInstanceRef = useRef(null);
  const sceneContainerId = `${props.backgroundColor}-sceneContainerId`;
  const sceneId = `${props.backgroundColor}-sceneId`;
  useEffect(() => {
    if (!sceneInstanceRef.current) {
      sceneInstanceRef.current = useWorld(sceneId, sceneContainerId, props.backgroundColor)
    }
  }, [])
  return (
    <Box id={sceneContainerId} {...boxProps}>
      <canvas id={sceneId} />
    </Box>
  )
}
