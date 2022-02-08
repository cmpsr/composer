const icons = [
  'clock',
  'credit-card',
  'adjustments-horizontal',
  'adjustments',
  'star',
  'heart',
  'filter',
  'ban',
  'trash',
  'fingerprint',
  'zoom-in',
  'zoom-out',
  'search',
  'thumb-up',
  'thumb-down',
  'send',
  'pin',
  'pinned-off',
  'eye',
  'eye-off',
  'shopping-cart',
  'shield',
  'coin',
  'calendar',
  'help',
  'settings',
  'login',
  'logout',
  'pencil',
  'edit',
  'layout',
  'list',
  'bookmark',
  'bookmark-off',
  'check',
  'world',
  'calendar-event',
  'alert-circle',
  'alert-triangle',
  'circle-check',
  'info-circle',
  'player-pause',
  'player-play',
  'player-record',
  'player-skip-back',
  'player-skip-forward',
  'player-stop',
  'player-track-next',
  'player-track-prev',
  'volume-2',
  'volume-3',
  'volume',
  'microphone-off',
  'microphone',
  'video-off',
  'video',
  'music',
  'phone-incoming',
  'phone-off',
  'phone-outgoing',
  'phone',
  'message',
  'mail',
  'mail-opened',
  'circle-0',
  'circle-1',
  'circle-2',
  'circle-3',
  'circle-4',
  'circle-5',
  'circle-6',
  'circle-7',
  'circle-8',
  'circle-9',
  'plus',
  'x',
  'link',
  'hash',
  'tag',
  'archive',
  'flag',
  'inbox',
  'paperclip',
  'folder',
  'folder-plus',
  'folder-x',
  'folder-off',
  'upload',
  'download',
  'cloud-upload',
  'cloud-download',
  'cloud',
  'cloud-off',
  'file',
  'files',
  'file-download',
  'file-upload',
  'file-search',
  'external-link',
  'file-export',
  'file-import',
  'photo',
  'camera',
  'camera-plus',
  'map-pin',
  'map',
  'location',
  'current-location',
  'chevron-left',
  'chevron-up',
  'chevron-right',
  'chevron-down',
  'selector',
  'arrow-left',
  'arrow-up',
  'arrow-right',
  'arrow-down',
  'arrows-sort',
  'arrows-minimize',
  'arrows-maximize',
  'menu-2',
  'circle-plus',
  'circle-minus',
  'circle-x',
  'caret-left',
  'caret-up',
  'caret-right',
  'caret-down',
  'refresh',
  'dots',
  'lock',
  'lock-open',
  'bell',
  'bell-off',
  'share',
  'user-circle',
  'user',
  'users',
].sort();

const fs = require('fs');

const iconName = (myStr) =>
  'Icon' +
  myStr
    .replace(/-([a-z,0-9])/g, (g) => g[1].toUpperCase())
    .replace(myStr[0], myStr[0].toUpperCase());

const sourceDir = process.argv[2];
if (!sourceDir) {
  console.error('Missing TablerIcons directory');
  return;
}

// Copy files

icons.forEach((icon) =>
  fs.copyFileSync(
    `${sourceDir}/icons-react/icons-js/${icon}.js`,
    `${process.cwd()}/src/components/primitives/Icons/TablerIcons/${icon}.js`
  )
);

const doNotEditHeader = `//
// This is a generated file. DO NOT EDIT IT.
// Instead run:
//
// yarn gen:icons [path_to_tabler_icons_root_folder]
//`;

// Generate tabler icons index

const tablerIndexContent = icons
  .map((icon) => `export { default as ${iconName(icon)} } from './${icon}';`)
  .join('\n');
fs.writeFileSync(
  `${process.cwd()}/src/components/primitives/Icons/TablerIcons/index.ts`,
  `${doNotEditHeader}
${tablerIndexContent}`
);

// Generate Icons.tsx

const tablerIcons = icons.map((icon) => {
  const Icon = iconName(icon);
  return `export const ${Icon} = (props: IconProps) => withIcon(Tabler.${Icon}, props);`;
});
const iconsFileContent = `${doNotEditHeader}
import React from 'react';
import {
  CSSWithMultiValues,
  Icon,
  RecursiveCSSObject,
  useStyleConfig,
} from '@chakra-ui/react';
import * as Tabler from './TablerIcons';
import { IconProps } from './types';

const withIcon = (Component: React.FC, props: IconProps) => {
  const styles = useStyleConfig('Icon', { size: props?.size }) as Record<
    string,
    RecursiveCSSObject<CSSWithMultiValues>
  >;
  return (
    <Icon {...styles} {...props}>
      <Component />
    </Icon>
  );
};

${tablerIcons.join('\n')}
`;

fs.writeFileSync(
  `${process.cwd()}/src/components/primitives/Icons/Icons.tsx`,
  iconsFileContent
);

// Generate stories

const storiesContent = `${doNotEditHeader}
import React from 'react';
import { Meta } from '@storybook/react';
import * as Icons from './Icons';
import { iconSizes } from './types';
import { Box, Flex, Grid } from '@components';

export default {
  title: 'Components/Primitives/Icons',
  argTypes: {
    size: {
      options: iconSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = (args) => (
  <Grid columns={[1, 3, 5]} spacingY="spacer-4">${icons
    .map(
      (icon) => `
    <Flex direction="column" alignItems="center">
      <Box>
        <Icons.${iconName(icon)} {...args} />
      </Box>
      <Box>${iconName(icon)}</Box>
    </Flex>`
    )
    .join('')}
  </Grid>
);
export const All = Template.bind({});
All.args = {
  color: 'primary-default',
};
`;

fs.writeFileSync(
  `${process.cwd()}/src/components/primitives/Icons/Icons.stories.tsx`,
  storiesContent
);
