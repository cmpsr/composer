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
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Alert"
      icons={AlertIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Av"
      icons={AvIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Communication"
      icons={CommunicationIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Content"
      icons={ContentIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Device"
      icons={DeviceIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Editor"
      icons={EditorIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="File"
      icons={FileIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Hardware"
      icons={HardwareIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Image"
      icons={ImageIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Toggle"
      icons={ToggleIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Places"
      icons={PlacesIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Navigation"
      icons={NavigationIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Notification"
      icons={NotificationIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Social"
      icons={SocialIcons}
      iconType={Icon.Types.Outlined}
    />
    <SectionIconWrapper
      sectionName="Maps"
      icons={MapsIcons}
      iconType={Icon.Types.Outlined}
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
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Alert"
      icons={AlertIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Av"
      icons={AvIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Communication"
      icons={CommunicationIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Content"
      icons={ContentIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Device"
      icons={DeviceIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Editor"
      icons={EditorIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="File"
      icons={FileIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Hardware"
      icons={HardwareIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Image"
      icons={ImageIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Toggle"
      icons={ToggleIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Places"
      icons={PlacesIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Navigation"
      icons={NavigationIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Notification"
      icons={NotificationIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Social"
      icons={SocialIcons}
      iconType={Icon.Types.Rounded}
    />
    <SectionIconWrapper
      sectionName="Maps"
      icons={MapsIcons}
      iconType={Icon.Types.Rounded}
    />
  </>
);

Rounded.story = {
  name: 'Rounded Icons',
};
