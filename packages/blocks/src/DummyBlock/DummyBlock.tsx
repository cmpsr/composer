import React, { FC } from 'react';
import { Button } from '@cmpsr/components';
import { DummyBlockProps } from './types';

export const DummyBlock: FC<DummyBlockProps> = (props) => <Button {...props} />;
