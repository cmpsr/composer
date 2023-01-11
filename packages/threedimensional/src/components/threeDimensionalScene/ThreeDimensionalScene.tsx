import { Box } from '@cmpsr/components';
import { omit } from 'lodash';
import React, { FC, useEffect, useRef } from 'react';
import { generateUUID } from 'three/src/math/MathUtils';
import { World } from '../../scenes/World';
import { ThreeDimensionalSceneProps } from './types';


export const ThreeDimensionalScene: FC<ThreeDimensionalSceneProps> = (props) => {
  const THREEPropsKeys = ["backgroundColor", "threeDimensionalObjectOrScene", "transparentBackgroundColor"];
  const boxProps = omit(props, THREEPropsKeys);
  const sceneInstanceRef = useRef(null);
  const sceneContainerId = `${generateUUID()}-sceneContainerId`;
  const sceneId = `${generateUUID()}-sceneId`;
  useEffect(() => {
    if (!sceneInstanceRef.current) {
      sceneInstanceRef.current = new World(sceneId, sceneContainerId, props.backgroundColor, props.threeDimensionalObjectOrScene, props.transparentBackgroundColor)
    }
    return () => {
      if (sceneInstanceRef.current) {
        sceneInstanceRef.current.stopRendering();
      }
    }
  }, [])
  return (
    <Box id={sceneContainerId} {...boxProps}>
      <canvas id={sceneId} />
    </Box>
  )
}
