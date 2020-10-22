import React from 'react';
import styled from 'styled-components';
import { Icon } from '.';
import * as ActionIcons from './icons/action';
import * as AlertIcons from './icons/alert';
import * as AvIcons from './icons/av';
import * as CommunicationIcons from './icons/communication';
import * as ContentIcons from './icons/content';
import * as DeviceIcons from './icons/device';
import * as EditorIcons from './icons/editor';
import * as FileIcons from './icons/file';
import * as HardwareIcons from './icons/hardware';
import * as ImageIcons from './icons/image';
import * as ToggleIcons from './icons/toggle';
import * as PlacesIcons from './icons/places';
import * as NavigationIcons from './icons/navigation';
import * as NotificationIcons from './icons/notification';
import * as SocialIcons from './icons/social';
import * as MapsIcons from './icons/maps';

export default {
  title: 'Primitives/Icon',
  component: Icon,
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  height: 6rem;
  width: 10rem;
`;

const SectionIconWrapper = ({ sectionName, icons, iconType }) => (
  <>
    <h1>{sectionName}</h1>
    <Container>
      {Object.keys(icons).map((key) => {
        const iconComponent = icons[key];
        return (
          <Wrapper key={key}>
            <Icon>{iconComponent({ type: iconType })}</Icon>
            <span title={key}>{key}</span>
          </Wrapper>
        );
      })}
    </Container>
  </>
);

export const Filled = () => (
  <>
    <SectionIconWrapper
      sectionName="Action"
      icons={ActionIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Alert"
      icons={AlertIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Av"
      icons={AvIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Communication"
      icons={CommunicationIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Content"
      icons={ContentIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Device"
      icons={DeviceIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Editor"
      icons={EditorIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="File"
      icons={FileIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Hardware"
      icons={HardwareIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Image"
      icons={ImageIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Toggle"
      icons={ToggleIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Places"
      icons={PlacesIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Navigation"
      icons={NavigationIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Notification"
      icons={NotificationIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Social"
      icons={SocialIcons}
      iconType={Icon.Types.Filled}
    />
    <SectionIconWrapper
      sectionName="Maps"
      icons={MapsIcons}
      iconType={Icon.Types.Filled}
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
