import React from 'react';
import { getChildren } from '../getChildren';

type Props = {
  id: string;
  preview?: boolean;
};

export const getPage: React.FC<Props> = ({ id, preview = false }) => {
  const data = getChildren({ id, preview });
  if (!data) return;
  return <div className="content">{data}</div>;
};
