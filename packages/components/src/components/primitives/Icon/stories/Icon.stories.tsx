import React from 'react';

import { Icon } from '..';
import { Typography } from '../../Typography';
import { TypographyTypes } from '../../Typography';

import * as ActionIcons from '../icons/action';
import * as AlertIcons from '../icons/alert';
import * as AvIcons from '../icons/av';
import * as CommunicationIcons from '../icons/communication';
import * as ContentIcons from '../icons/content';
import * as DeviceIcons from '../icons/device';
import * as EditorIcons from '../icons/editor';
import * as FileIcons from '../icons/file';
import * as HardwareIcons from '../icons/hardware';
import * as ImageIcons from '../icons/image';
import * as ToggleIcons from '../icons/toggle';
import * as PlacesIcons from '../icons/places';
import * as NavigationIcons from '../icons/navigation';
import * as NotificationIcons from '../icons/notification';
import * as SocialIcons from '../icons/social';
import * as MapsIcons from '../icons/maps';

export default {
  title: 'Composer/Primitive/Icon',
  component: Icon,
};

const SectionIconWrapper = ({ sectionName, icons, iconType }) => {
  return (
    <>
      <Typography tag="h1" type={TypographyTypes.Headline5}>
        {sectionName}
      </Typography>
      <div className="flex flex-wrap p-2">
        {Object.keys(icons).map((key) => {
          const iconComponent = icons[key];
          return (
            <div
              className="flex flex-col items-center text-center h-24 w-40 mx-6"
              key={key}
            >
              <Icon className="mx-auto">
                {iconComponent({ type: iconType })}
              </Icon>
              <span title={key}>{key}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Filled = () => (
  <>
    <SectionIconWrapper
      sectionName="Action"
      icons={ActionIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Alert"
      icons={AlertIcons}
      iconType="filled"
    />
    <SectionIconWrapper sectionName="Av" icons={AvIcons} iconType="filled" />
    <SectionIconWrapper
      sectionName="Communication"
      icons={CommunicationIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Content"
      icons={ContentIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Device"
      icons={DeviceIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Editor"
      icons={EditorIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="File"
      icons={FileIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Hardware"
      icons={HardwareIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Image"
      icons={ImageIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Toggle"
      icons={ToggleIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Places"
      icons={PlacesIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Navigation"
      icons={NavigationIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Notification"
      icons={NotificationIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Social"
      icons={SocialIcons}
      iconType="filled"
    />
    <SectionIconWrapper
      sectionName="Maps"
      icons={MapsIcons}
      iconType="filled"
    />
  </>
);

Filled.story = {
  name: 'Filled Icons',
};

export const Outlined = () => (
  <>
    <SectionIconWrapper
      sectionName="Action"
      icons={ActionIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Alert"
      icons={AlertIcons}
      iconType="outlined"
    />
    <SectionIconWrapper sectionName="Av" icons={AvIcons} iconType="outlined" />
    <SectionIconWrapper
      sectionName="Communication"
      icons={CommunicationIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Content"
      icons={ContentIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Device"
      icons={DeviceIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Editor"
      icons={EditorIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="File"
      icons={FileIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Hardware"
      icons={HardwareIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Image"
      icons={ImageIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Toggle"
      icons={ToggleIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Places"
      icons={PlacesIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Navigation"
      icons={NavigationIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Notification"
      icons={NotificationIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Social"
      icons={SocialIcons}
      iconType="outlined"
    />
    <SectionIconWrapper
      sectionName="Maps"
      icons={MapsIcons}
      iconType="outlined"
    />
  </>
);

Outlined.story = {
  name: 'Outlined Icons',
};

export const Rounded = () => (
  <>
    <SectionIconWrapper
      sectionName="Action"
      icons={ActionIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Alert"
      icons={AlertIcons}
      iconType="rounded"
    />
    <SectionIconWrapper sectionName="Av" icons={AvIcons} iconType="rounded" />
    <SectionIconWrapper
      sectionName="Communication"
      icons={CommunicationIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Content"
      icons={ContentIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Device"
      icons={DeviceIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Editor"
      icons={EditorIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="File"
      icons={FileIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Hardware"
      icons={HardwareIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Image"
      icons={ImageIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Toggle"
      icons={ToggleIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Places"
      icons={PlacesIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Navigation"
      icons={NavigationIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Notification"
      icons={NotificationIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Social"
      icons={SocialIcons}
      iconType="rounded"
    />
    <SectionIconWrapper
      sectionName="Maps"
      icons={MapsIcons}
      iconType="rounded"
    />
  </>
);

Rounded.story = {
  name: 'Rounded Icons',
};
