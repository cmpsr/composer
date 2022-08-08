import React from 'react';
import { Meta } from '@storybook/react';
import { ColumnLayout } from '.';
import { IconChevronRight } from '@cmpsr/components';

export default {
  component: ColumnLayout,
  title: 'Blocks/ColumnLayout',
} as Meta;

export const Bounded = () => (
  <ColumnLayout backgroundColor="background-overlay" p="1.5rem" gap="1.5rem">
    <ColumnLayout.TextPairing variant="textpairing-header-XL" textAlign="center">
      <ColumnLayout.TextPairing.Label>
        The next generation of care for women and families
      </ColumnLayout.TextPairing.Label>
      <ColumnLayout.TextPairing.SubLabel color="text-secondary">
        We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
      </ColumnLayout.TextPairing.SubLabel>
    </ColumnLayout.TextPairing>
    <ColumnLayout.ColumnGroup gap="1rem" justifyContent="center" flexWrap="wrap">
      <ColumnLayout.Column variant="vertical" maxWidth="250px" bounded filled>
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          width="50px"
        />
        <ColumnLayout.Column.TextPairing>
          <ColumnLayout.Column.TextPairing.Label>Composer</ColumnLayout.Column.TextPairing.Label>
          <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.TextPairing.SubLabel>
        </ColumnLayout.Column.TextPairing>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="250px" bounded filled>
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          width="50px"
        />
        <ColumnLayout.Column.TextPairing>
          <ColumnLayout.Column.TextPairing.Label>Composer</ColumnLayout.Column.TextPairing.Label>
          <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.TextPairing.SubLabel>
        </ColumnLayout.Column.TextPairing>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="250px" bounded filled>
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          width="50px"
        />
        <ColumnLayout.Column.TextPairing>
          <ColumnLayout.Column.TextPairing.Label>Composer</ColumnLayout.Column.TextPairing.Label>
          <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.TextPairing.SubLabel>
        </ColumnLayout.Column.TextPairing>
      </ColumnLayout.Column>
    </ColumnLayout.ColumnGroup>
    <ColumnLayout.LinkGroup gap="1rem" justifyContent="center">
      <ColumnLayout.Link variant="primary">Primary</ColumnLayout.Link>
      <ColumnLayout.Link variant="primary-alt">Primary alt</ColumnLayout.Link>
    </ColumnLayout.LinkGroup>
  </ColumnLayout>
);

export const Unbounded = () => (
  <ColumnLayout backgroundColor="background-overlay" p="1.5rem" gap="3rem">
    <ColumnLayout.TextPairing variant="textpairing-header-XL" textAlign="center">
      <ColumnLayout.TextPairing.Label>
        The next generation of care for women and families
      </ColumnLayout.TextPairing.Label>
    </ColumnLayout.TextPairing>
    <ColumnLayout.ColumnGroup gap="2rem" justifyContent="center" flexWrap="wrap">
      <ColumnLayout.Column variant="vertical" maxWidth="220px">
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          maxWidth="150px"
        />
        <ColumnLayout.Column.Tag size="s">
          <ColumnLayout.Column.Tag.Label>Tech</ColumnLayout.Column.Tag.Label>
        </ColumnLayout.Column.Tag>
        <ColumnLayout.Column.TextPairing>
          <ColumnLayout.Column.TextPairing.Label>Composer</ColumnLayout.Column.TextPairing.Label>
          <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.TextPairing.SubLabel>
        </ColumnLayout.Column.TextPairing>
        <ColumnLayout.Column.Link size="s" trailingIcon={<IconChevronRight />}>
          More info
        </ColumnLayout.Column.Link>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="220px">
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          maxWidth="150px"
        />
        <ColumnLayout.Column.Tag size="s">
          <ColumnLayout.Column.Tag.Label>Tech</ColumnLayout.Column.Tag.Label>
        </ColumnLayout.Column.Tag>
        <ColumnLayout.Column.TextPairing>
          <ColumnLayout.Column.TextPairing.Label>Composer</ColumnLayout.Column.TextPairing.Label>
          <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.TextPairing.SubLabel>
        </ColumnLayout.Column.TextPairing>
        <ColumnLayout.Column.Link size="s" trailingIcon={<IconChevronRight />}>
          More info
        </ColumnLayout.Column.Link>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="220px">
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          maxWidth="150px"
        />
        <ColumnLayout.Column.Tag size="s">
          <ColumnLayout.Column.Tag.Label>Tech</ColumnLayout.Column.Tag.Label>
        </ColumnLayout.Column.Tag>
        <ColumnLayout.Column.TextPairing>
          <ColumnLayout.Column.TextPairing.Label>Composer</ColumnLayout.Column.TextPairing.Label>
          <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.TextPairing.SubLabel>
        </ColumnLayout.Column.TextPairing>
        <ColumnLayout.Column.Link size="s" trailingIcon={<IconChevronRight />}>
          More info
        </ColumnLayout.Column.Link>
      </ColumnLayout.Column>
    </ColumnLayout.ColumnGroup>
  </ColumnLayout>
);

const Template = ({ label, subLabel, tagLabel, columnLabel, columnSubLabel, linkLabel, bounded, filled }) => (
  <ColumnLayout backgroundColor="background-overlay" p="1.5rem" gap="3rem">
    <ColumnLayout.TextPairing variant="textpairing-header-XL" textAlign="center">
      <ColumnLayout.TextPairing.Label>{label}</ColumnLayout.TextPairing.Label>
      <ColumnLayout.TextPairing.SubLabel color="text-secondary">{subLabel}</ColumnLayout.TextPairing.SubLabel>
    </ColumnLayout.TextPairing>
    <ColumnLayout.ColumnGroup gap="2rem" justifyContent="center" flexWrap="wrap">
      {Array(6).fill(
        <ColumnLayout.Column variant="vertical" maxWidth="220px" bounded={bounded} filled={filled}>
          <ColumnLayout.Column.Image
            src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
            maxWidth="150px"
          />
          <ColumnLayout.Column.Tag size="s">
            <ColumnLayout.Column.Tag.Label>{tagLabel}</ColumnLayout.Column.Tag.Label>
          </ColumnLayout.Column.Tag>
          <ColumnLayout.Column.TextPairing>
            <ColumnLayout.Column.TextPairing.Label>{columnLabel}</ColumnLayout.Column.TextPairing.Label>
            <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
              {columnSubLabel}
            </ColumnLayout.Column.TextPairing.SubLabel>
          </ColumnLayout.Column.TextPairing>
          <ColumnLayout.Column.Link size="s" trailingIcon={<IconChevronRight />}>
            {linkLabel}
          </ColumnLayout.Column.Link>
        </ColumnLayout.Column>
      )}
    </ColumnLayout.ColumnGroup>
  </ColumnLayout>
);

export const Playground = Template.bind({});
Playground.args = {
  label: 'The next generation of care for women and families',
  subLabel: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
  tagLabel: 'Tech',
  columnLabel: 'Composer',
  columnSubLabel: 'the most advanced web and landing page builder for non-programmers',
  linkLabel: 'More info',
  bounded: false,
  filled: false,
};
