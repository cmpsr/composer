import React from 'react';

import { BodyCopy } from '.';
import {
  HEADING_1,
  HEADING_2,
  HEADING_3,
  HEADING_4,
  HEADING_5,
  HEADING_6,
  PARAGRAPH,
  LIST,
  LINK,
  CODE,
} from './constants';

export default {
  title: 'Composer/Primitive/BodyCopy',
  component: BodyCopy,
};

const headingsCopy = `${HEADING_1}\n\n${HEADING_2}\n\n${HEADING_3}\n\n${HEADING_4}\n\n${HEADING_5}\n\n${HEADING_6}`;

export const headings = () => (
  <div>
    <BodyCopy copy={headingsCopy} style={{}} />
  </div>
);

headings.story = {};

const paragraph1Copy = `${HEADING_1}\n\n${PARAGRAPH}\n\n${PARAGRAPH}\n\n${LIST}\n\n${LINK}\n\n${CODE}\n\n`;
const paragraph2Copy = `${HEADING_2}\n\n${PARAGRAPH}\n\n${PARAGRAPH}\n\n${LIST}\n\n${LINK}\n\n${CODE}\n\n`;
const paragraph3Copy = `${HEADING_3}\n\n${PARAGRAPH}\n\n${PARAGRAPH}\n\n${LIST}\n\n${LINK}\n\n${CODE}\n\n`;
const paragraph4Copy = `${HEADING_4}\n\n${PARAGRAPH}\n\n${PARAGRAPH}\n\n${LIST}\n\n${LINK}\n\n${CODE}\n\n`;
const paragraph5Copy = `${HEADING_5}\n\n${PARAGRAPH}\n\n${PARAGRAPH}\n\n${LIST}\n\n${LINK}\n\n${CODE}\n\n`;
const paragraph6Copy = `${HEADING_6}\n\n${PARAGRAPH}\n\n${PARAGRAPH}\n\n${LIST}\n\n${LINK}\n\n${CODE}\n\n`;

export const mixed = () => (
  <div>
    <BodyCopy
      copy={`${paragraph1Copy}${paragraph2Copy}${paragraph3Copy}${paragraph4Copy}${paragraph5Copy}${paragraph6Copy}`}
      style={{}}
    />
  </div>
);

mixed.story = {
  name: 'Mixed types',
};
