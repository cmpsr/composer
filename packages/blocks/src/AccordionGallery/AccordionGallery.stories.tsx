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
          <AccordionGallery.TextPairing variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.TextPairing.Label>
              The next generation of care for women and families
            </AccordionGallery.TextPairing.Label>
          </AccordionGallery.TextPairing>
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
          <AccordionGallery.TextPairing variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.TextPairing.Label>
              The next generation of care for women and families
            </AccordionGallery.TextPairing.Label>
          </AccordionGallery.TextPairing>
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
    <AccordionGallery.Legend variant="text-header-M" color="primary-default" textTransform="uppercase">
      Legend
    </AccordionGallery.Legend>
    <AccordionGallery.TextPairing
      variant="textpairing-header-2XL"
      textAlign={{ base: 'unset', md: 'center', lg: 'unset' }}
    >
      <AccordionGallery.TextPairing.Label>
        The next generation of care for women and families
      </AccordionGallery.TextPairing.Label>
    </AccordionGallery.TextPairing>
    <AccordionGallery.Accordion allowToggle>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image width="600px" src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.TextPairing variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.TextPairing.Label>
              The next generation of care for women and families
            </AccordionGallery.TextPairing.Label>
          </AccordionGallery.TextPairing>
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
          <AccordionGallery.TextPairing variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.TextPairing.Label>
              The next generation of care for women and families
            </AccordionGallery.TextPairing.Label>
          </AccordionGallery.TextPairing>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>
          We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
          three ways we could find it.
        </AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
    </AccordionGallery.Accordion>
  </AccordionGallery>
);

const Template = ({ legend, label, subLabel, itemLabel, itemPanel }) => (
  <AccordionGallery>
    <AccordionGallery.Legend variant="text-header-M" color="primary-default" textTransform="uppercase">
      {legend}
    </AccordionGallery.Legend>
    <AccordionGallery.TextPairing
      variant="textpairing-header-2XL"
      textAlign={{ base: 'unset', md: 'center', lg: 'unset' }}
    >
      <AccordionGallery.TextPairing.Label>{label}</AccordionGallery.TextPairing.Label>
      <AccordionGallery.TextPairing.SubLabel>{subLabel}</AccordionGallery.TextPairing.SubLabel>
    </AccordionGallery.TextPairing>
    <AccordionGallery.Accordion allowToggle>
      <AccordionGallery.Accordion.Item>
        <AccordionGallery.Accordion.Image width="200px" src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        <AccordionGallery.Accordion.Button>
          <AccordionGallery.TextPairing variant="textpairing-header-M" textAlign="left">
            <AccordionGallery.TextPairing.Label>{itemLabel}</AccordionGallery.TextPairing.Label>
          </AccordionGallery.TextPairing>
        </AccordionGallery.Accordion.Button>
        <AccordionGallery.Accordion.Panel>{itemPanel}</AccordionGallery.Accordion.Panel>
      </AccordionGallery.Accordion.Item>
    </AccordionGallery.Accordion>
  </AccordionGallery>
);

export const Playground = Template.bind({});
Playground.args = {
  legend: 'Legend',
  label: 'Label',
  subLabel: 'SubLabel',
  itemLabel: 'Item Label',
  itemPanel: 'Item Panel',
};
