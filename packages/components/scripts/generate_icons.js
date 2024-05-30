const icons = [
  'IconAdjustments',
  'IconAdjustmentsHorizontal',
  'IconAlertCircle',
  'IconAlertTriangle',
  'IconArchive',
  'IconArrowDown',
  'IconArrowLeft',
  'IconArrowRight',
  'IconArrowUp',
  'IconArrowsMaximize',
  'IconArrowsMinimize',
  'IconArrowsSort',
  'IconBan',
  'IconBell',
  'IconBellOff',
  'IconBookmark',
  'IconBookmarkOff',
  'IconBrandFacebook',
  'IconBrandInstagram',
  'IconBrandLinkedin',
  'IconBrandTwitter',
  'IconBrandX',
  'IconCalendar',
  'IconCalendarEvent',
  'IconCamera',
  'IconCameraPlus',
  'IconCaretDown',
  'IconCaretLeft',
  'IconCaretRight',
  'IconCaretUp',
  'IconCheck',
  'IconChevronDown',
  'IconChevronLeft',
  'IconChevronRight',
  'IconChevronUp',
  'IconCircle0',
  'IconCircle1',
  'IconCircle2',
  'IconCircle3',
  'IconCircle4',
  'IconCircle5',
  'IconCircle6',
  'IconCircle7',
  'IconCircle8',
  'IconCircle9',
  'IconCircleCheck',
  'IconCircleCheckFilled',
  'IconCircleMinus',
  'IconCirclePlus',
  'IconCircleX',
  'IconClock',
  'IconCloud',
  'IconCloudDownload',
  'IconCloudOff',
  'IconCloudUpload',
  'IconCoin',
  'IconCreditCard',
  'IconCurrentLocation',
  'IconDots',
  'IconDownload',
  'IconEdit',
  'IconExternalLink',
  'IconEye',
  'IconEyeOff',
  'IconFile',
  'IconFileDownload',
  'IconFileExport',
  'IconFileImport',
  'IconFileSearch',
  'IconFileUpload',
  'IconFiles',
  'IconFilter',
  'IconFingerprint',
  'IconFlag',
  'IconFolder',
  'IconFolderOff',
  'IconFolderPlus',
  'IconFolderX',
  'IconHash',
  'IconHeart',
  'IconHelp',
  'IconInbox',
  'IconInfoCircle',
  'IconLayout',
  'IconLink',
  'IconList',
  'IconLocation',
  'IconLock',
  'IconLockOpen',
  'IconLogin',
  'IconLogout',
  'IconMail',
  'IconMailOpened',
  'IconMap',
  'IconMapPin',
  'IconMarkdown',
  'IconMenu2',
  'IconMessage',
  'IconMicrophone',
  'IconMicrophoneOff',
  'IconMusic',
  'IconPaperclip',
  'IconPencil',
  'IconPhone',
  'IconPhoneIncoming',
  'IconPhoneOff',
  'IconPhoneOutgoing',
  'IconPhoto',
  'IconPin',
  'IconPinnedOff',
  'IconPlayerPause',
  'IconPlayerPlay',
  'IconPlayerRecord',
  'IconPlayerSkipBack',
  'IconPlayerSkipForward',
  'IconPlayerStop',
  'IconPlayerTrackNext',
  'IconPlayerTrackPrev',
  'IconPlus',
  'IconRefresh',
  'IconSearch',
  'IconSelector',
  'IconSend',
  'IconSettings',
  'IconShare',
  'IconShield',
  'IconShoppingCart',
  'IconStar',
  'IconTag',
  'IconThumbDown',
  'IconThumbUp',
  'IconTrash',
  'IconUpload',
  'IconUser',
  'IconUserCircle',
  'IconUsers',
  'IconVideo',
  'IconVideoOff',
  'IconVolume',
  'IconVolume2',
  'IconVolume3',
  'IconWorld',
  'IconX',
  'IconZoomIn',
  'IconZoomOut',
  'IconDeviceDesktop',
  'IconDeviceTablet',
  'IconDeviceMobile',
  'IconLetterT',
  'IconRadiusBottomLeft',
  'IconArrowBackUp',
  'IconArrowForwardUp',
  'IconBold',
  'IconItalic',
  'IconUnderline',
  'IconStrikethrough',
  'IconCode',
  'IconAlignLeft',
  'IconAlignCenter',
  'IconAlignRight',
  'IconAlignJustified',
  'IconSourceCode',
  'IconH1',
  'IconH2',
  'IconH3',
  'IconH4',
  'IconH5',
  'IconH6',
  'IconListNumbers',
].sort();

const fs = require('fs');
const path = require('path');

const doNotEditHeader = `//
// This is a generated file. DO NOT EDIT IT.
// Instead run:
//
// yarn install #if you've updated @tabler/icons-react
// yarn gen:icons
//`;

// Generate Icons.tsx

const tablerIcons = icons.map((Icon) => {
  return `export const ${Icon} = forwardRef((props: IconProps, ref) => withIcon(Tabler.${Icon}, props, ref));`;
});
const iconsFileContent = `${doNotEditHeader}
import React, { Ref } from 'react';
import {
  CSSWithMultiValues,
  Icon,
  RecursiveCSSObject,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import * as Tabler from '@tabler/icons-react';
import { IconProps } from './types';

const withIcon = (Component: React.FC, props: IconProps, ref: Ref<SVGSVGElement>) => {
  const styles = useStyleConfig('Icon', { size: props?.size }) as Record<
    string,
    RecursiveCSSObject<CSSWithMultiValues>
  >;
  return (
    <Icon {...styles} {...props} ref={ref}>
      <Component />
    </Icon>
  );
};

${tablerIcons.join('\n')}
`;

fs.writeFileSync(
  path.resolve(__dirname, '../src/components/media/Icons/Icons.tsx'),
  iconsFileContent.replace(/(Tabler.IconCircle)(\d)/g, '$1Number$2')
);

// Generate stories

const storiesContent = `${doNotEditHeader}
import React from 'react';
import { Meta } from '@storybook/react';
import * as Icons from './Icons';
import { iconSizes } from './types';
import { Box, Flex, Grid } from '@components';

export default {
  title: 'Components/Media/Icons',
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
        <Icons.${icon} {...args} />
      </Box>
      <Box>${icon}</Box>
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
  path.resolve(__dirname, '../src/components/media/Icons/Icons.stories.tsx'),
  storiesContent
);
