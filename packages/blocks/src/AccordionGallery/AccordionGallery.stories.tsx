import React from 'react';
import { Meta } from '@storybook/react';
import { AccordionGallery } from './AccordionGallery';

export default {
  component: AccordionGallery,
  title: 'Blocks/AccordionGallery',
} as Meta;

export const Basic = () => (
  <AccordionGallery>
    <AccordionGallery.Accordion allowToggle>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image width="200px" src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.Title variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
          </AccordionGallery.Title>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image
          filter="invert(1)"
          width="200px"
          src="https://avatars0.githubusercontent.com/u/67131017?s=200"
        />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.Title variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
          </AccordionGallery.Title>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
    </AccordionGallery.Accordion>
  </AccordionGallery>
);

export const WithTitles = () => (
  <AccordionGallery>
    <AccordionGallery.Overline variant="text-header-M" color="primary-default" textTransform="uppercase">
      Legend
    </AccordionGallery.Overline>
    <AccordionGallery.Title variant="textpairing-header-2XL" textAlign={{ base: 'unset', md: 'center', lg: 'unset' }}>
      <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
    </AccordionGallery.Title>
    <AccordionGallery.Accordion allowToggle>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image width="600px" src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.Title variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
          </AccordionGallery.Title>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image
          filter="invert(1)"
          width="600px"
          src="https://avatars0.githubusercontent.com/u/67131017?s=200"
        />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.Title variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
          </AccordionGallery.Title>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
    </AccordionGallery.Accordion>
  </AccordionGallery>
);

export const WithDefaultImage = () => (
  <AccordionGallery
    defaultImage={
      <AccordionGallery.Accordion.Image
        filter="invert(0.5)"
        width="600px"
        src="https://avatars0.githubusercontent.com/u/67131017?s=200"
      />
    }
  >
    <AccordionGallery.Overline variant="text-header-M" color="primary-default" textTransform="uppercase">
      Legend
    </AccordionGallery.Overline>
    <AccordionGallery.Title variant="textpairing-header-2XL" textAlign={{ base: 'unset', md: 'center', lg: 'unset' }}>
      <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
    </AccordionGallery.Title>
    <AccordionGallery.Accordion allowToggle>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image width="600px" src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.Title variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
          </AccordionGallery.Title>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image
          filter="invert(1)"
          width="600px"
          src="https://avatars0.githubusercontent.com/u/67131017?s=200"
        />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.Title variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.Title.Label>There is life elsewhere in the universe</AccordionGallery.Title.Label>
          </AccordionGallery.Title>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
    </AccordionGallery.Accordion>
  </AccordionGallery>
);

const Template = ({ legend, label, subLabel, itemLabel, itemPanel, actionLink }) => (
  <AccordionGallery>
    <AccordionGallery.Overline variant="text-header-M" color="primary-default" textTransform="uppercase">
      {legend}
    </AccordionGallery.Overline>
    <AccordionGallery.Title variant="textpairing-header-2XL" textAlign={{ base: 'unset', md: 'center', lg: 'unset' }}>
      <AccordionGallery.Title.Label>{label}</AccordionGallery.Title.Label>
      <AccordionGallery.Title.SubLabel>{subLabel}</AccordionGallery.Title.SubLabel>
    </AccordionGallery.Title>
    <AccordionGallery.Accordion allowToggle>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image width="200px" src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.Title variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.Title.Label>{itemLabel}</AccordionGallery.Title.Label>
          </AccordionGallery.Title>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>{itemPanel}</AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
    </AccordionGallery.Accordion>
    <AccordionGallery.Action variant="primary" textAlign="center" display="block">
      {actionLink}
    </AccordionGallery.Action>
  </AccordionGallery>
);

export const Playground = Template.bind({});
Playground.args = {
  legend: 'Legend',
  label: 'Label',
  subLabel: 'SubLabel',
  itemLabel: 'Item Label',
  itemPanel: 'Item Panel',
  actionLink: 'Action Link',
};
