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
    <ColumnLayout.Title variant="textpairing-header-XL" textAlign="center">
      <ColumnLayout.Title.Label>There is life elsewhere in the universe</ColumnLayout.Title.Label>
      <ColumnLayout.Title.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </ColumnLayout.Title.SubLabel>
    </ColumnLayout.Title>
    <ColumnLayout.ColumnContainer gap="1rem" justifyContent="center" flexWrap="wrap">
      <ColumnLayout.Column variant="vertical" maxWidth="250px" bounded filled>
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          width="50px"
        />
        <ColumnLayout.Column.Title>
          <ColumnLayout.Column.Title.Label>Composer</ColumnLayout.Column.Title.Label>
          <ColumnLayout.Column.Title.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.Title.SubLabel>
        </ColumnLayout.Column.Title>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="250px" bounded filled>
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          width="50px"
        />
        <ColumnLayout.Column.Title>
          <ColumnLayout.Column.Title.Label>Composer</ColumnLayout.Column.Title.Label>
          <ColumnLayout.Column.Title.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.Title.SubLabel>
        </ColumnLayout.Column.Title>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="250px" bounded filled>
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          width="50px"
        />
        <ColumnLayout.Column.Title>
          <ColumnLayout.Column.Title.Label>Composer</ColumnLayout.Column.Title.Label>
          <ColumnLayout.Column.Title.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.Title.SubLabel>
        </ColumnLayout.Column.Title>
      </ColumnLayout.Column>
    </ColumnLayout.ColumnContainer>
    <ColumnLayout.Actions gap="1rem" justifyContent="center">
      <ColumnLayout.Action variant="primary">Primary</ColumnLayout.Action>
      <ColumnLayout.Action variant="primary-alt">Primary alt</ColumnLayout.Action>
    </ColumnLayout.Actions>
  </ColumnLayout>
);

export const Unbounded = () => (
  <ColumnLayout backgroundColor="background-overlay" p="1.5rem" gap="3rem">
    <ColumnLayout.Title variant="textpairing-header-XL" textAlign="center">
      <ColumnLayout.Title.Label>The next generation of care for women and families</ColumnLayout.Title.Label>
    </ColumnLayout.Title>
    <ColumnLayout.ColumnContainer gap="2rem" justifyContent="center" flexWrap="wrap">
      <ColumnLayout.Column variant="vertical" maxWidth="220px">
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          maxWidth="150px"
        />
        <ColumnLayout.Column.Tag size="s">
          <ColumnLayout.Column.Tag.Label>Tech</ColumnLayout.Column.Tag.Label>
        </ColumnLayout.Column.Tag>
        <ColumnLayout.Column.Title>
          <ColumnLayout.Column.Title.Label>Composer</ColumnLayout.Column.Title.Label>
          <ColumnLayout.Column.Title.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.Title.SubLabel>
        </ColumnLayout.Column.Title>
        <ColumnLayout.Column.Action size="s" trailingIcon={<IconChevronRight />}>
          More info
        </ColumnLayout.Column.Action>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="220px">
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          maxWidth="150px"
        />
        <ColumnLayout.Column.Tag size="s">
          <ColumnLayout.Column.Tag.Label>Tech</ColumnLayout.Column.Tag.Label>
        </ColumnLayout.Column.Tag>
        <ColumnLayout.Column.Title>
          <ColumnLayout.Column.Title.Label>Composer</ColumnLayout.Column.Title.Label>
          <ColumnLayout.Column.Title.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.Title.SubLabel>
        </ColumnLayout.Column.Title>
        <ColumnLayout.Column.Action size="s" trailingIcon={<IconChevronRight />}>
          More info
        </ColumnLayout.Column.Action>
      </ColumnLayout.Column>
      <ColumnLayout.Column variant="vertical" maxWidth="220px">
        <ColumnLayout.Column.Image
          src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
          maxWidth="150px"
        />
        <ColumnLayout.Column.Tag size="s">
          <ColumnLayout.Column.Tag.Label>Tech</ColumnLayout.Column.Tag.Label>
        </ColumnLayout.Column.Tag>
        <ColumnLayout.Column.Title>
          <ColumnLayout.Column.Title.Label>Composer</ColumnLayout.Column.Title.Label>
          <ColumnLayout.Column.Title.SubLabel color="text-secondary">
            the most advanced web and landing page builder for non-programmers
          </ColumnLayout.Column.Title.SubLabel>
        </ColumnLayout.Column.Title>
        <ColumnLayout.Column.Action size="s" trailingIcon={<IconChevronRight />}>
          More info
        </ColumnLayout.Column.Action>
      </ColumnLayout.Column>
    </ColumnLayout.ColumnContainer>
  </ColumnLayout>
);

const Template = ({ label, subLabel, tagLabel, columnLabel, columnSubLabel, linkLabel, bounded, filled }) => (
  <ColumnLayout backgroundColor="background-overlay" p="1.5rem" gap="3rem">
    <ColumnLayout.Title variant="textpairing-header-XL" textAlign="center">
      <ColumnLayout.Title.Label>{label}</ColumnLayout.Title.Label>
      <ColumnLayout.Title.SubLabel color="text-secondary">{subLabel}</ColumnLayout.Title.SubLabel>
    </ColumnLayout.Title>
    <ColumnLayout.ColumnContainer gap="2rem" justifyContent="center" flexWrap="wrap">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <ColumnLayout.Column key={index} variant="vertical" maxWidth="220px" bounded={bounded} filled={filled}>
            <ColumnLayout.Column.Image
              src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
              maxWidth="150px"
            />
            <ColumnLayout.Column.Tag size="s">
              <ColumnLayout.Column.Tag.Label>{tagLabel}</ColumnLayout.Column.Tag.Label>
            </ColumnLayout.Column.Tag>
            <ColumnLayout.Column.Title>
              <ColumnLayout.Column.Title.Label>{columnLabel}</ColumnLayout.Column.Title.Label>
              <ColumnLayout.Column.Title.SubLabel color="text-secondary">
                {columnSubLabel}
              </ColumnLayout.Column.Title.SubLabel>
            </ColumnLayout.Column.Title>
            <ColumnLayout.Column.Action size="s" trailingIcon={<IconChevronRight />}>
              {linkLabel}
            </ColumnLayout.Column.Action>
          </ColumnLayout.Column>
        ))}
    </ColumnLayout.ColumnContainer>
  </ColumnLayout>
);

export const Playground = Template.bind({});
Playground.args = {
  label: 'There is life elsewhere in the universe',
  subLabel:
    'We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.',
  tagLabel: 'Tech',
  columnLabel: 'Composer',
  columnSubLabel: 'the most advanced web and landing page builder for non-programmers',
  linkLabel: 'More info',
  bounded: false,
  filled: false,
};
