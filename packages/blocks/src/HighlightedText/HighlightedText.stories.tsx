import React from 'react';
import { Meta } from '@storybook/react';
import { IconChevronRight } from '@cmpsr/components';

import { HighlightedText } from './HighlightedText';

export default {
  component: HighlightedText,
  title: 'Blocks/HighlightedText',
  argTypes: {
    variant: {
      options: ['right', 'left'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Dummy = () => (
  <HighlightedText>
    <HighlightedText.Legend>BREAKING NEWS</HighlightedText.Legend>
    <HighlightedText.TextPairing variant="textpairing-header-4XL">
      <HighlightedText.TextPairing.Label>There is life elsewhere in the universe</HighlightedText.TextPairing.Label>
      <HighlightedText.TextPairing.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </HighlightedText.TextPairing.SubLabel>
    </HighlightedText.TextPairing>
    <HighlightedText.LinkGroup>
      <HighlightedText.Link variant="primary">Launch mission</HighlightedText.Link>
      <HighlightedText.Link variant="primary-alt">Learn more</HighlightedText.Link>
      <HighlightedText.Link variant="link" trailingIcon={<IconChevronRight />}>
        Find me a spaceship
      </HighlightedText.Link>
    </HighlightedText.LinkGroup>
  </HighlightedText>
);

// export const ImageLeft = () => (
//   <HighlightedText>
//     <HighlightedText.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
//     <HighlightedText.Content>
//       <HighlightedText.TextPairing variant="textpairing-header-4XL">
//         <HighlightedText.TextPairing.Label>
//           The next generation of care for women and families
//         </HighlightedText.TextPairing.Label>
//         <HighlightedText.TextPairing.SubLabel>
//           We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
//         </HighlightedText.TextPairing.SubLabel>
//       </HighlightedText.TextPairing>
//       <HighlightedText.LinkGroup>
//         <HighlightedText.Link children="Default" variant="primary" />
//         <HighlightedText.Link children="Default" variant="primary-alt" />
//       </HighlightedText.LinkGroup>
//     </HighlightedText.Content>
//   </HighlightedText>
// );

// export const ContentCentered = () => (
//   <HighlightedText>
//     <HighlightedText.Content contentAlignment="center">
//       <HighlightedText.TextPairing variant="textpairing-header-4XL">
//         <HighlightedText.TextPairing.Label>
//           The next generation of care for women and families
//         </HighlightedText.TextPairing.Label>
//         <HighlightedText.TextPairing.SubLabel>
//           We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
//         </HighlightedText.TextPairing.SubLabel>
//       </HighlightedText.TextPairing>
//       <HighlightedText.LinkGroup>
//         <HighlightedText.Link children="Default" variant="primary" />
//         <HighlightedText.Link children="Default" variant="primary-alt" />
//       </HighlightedText.LinkGroup>
//     </HighlightedText.Content>
//     <HighlightedText.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
//   </HighlightedText>
// );

// export const NoCta = () => (
//   <HighlightedText>
//     <HighlightedText.Content contentAlignment="start">
//       <HighlightedText.TextPairing variant="textpairing-header-4XL">
//         <HighlightedText.TextPairing.Label>
//           The next generation of care for women and families
//         </HighlightedText.TextPairing.Label>
//         <HighlightedText.TextPairing.SubLabel>
//           We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
//         </HighlightedText.TextPairing.SubLabel>
//       </HighlightedText.TextPairing>
//     </HighlightedText.Content>
//     <HighlightedText.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
//   </HighlightedText>
// );

// export const All = () => (
//   <HighlightedText>
//     <HighlightedText.Content>
//       <HighlightedText.ContentGroup>
//         <HighlightedText.Tag>Hello</HighlightedText.Tag>
//         <HighlightedText.Legend>Breaking news</HighlightedText.Legend>
//         <HighlightedText.TextPairing variant="textpairing-header-4XL">
//           <HighlightedText.TextPairing.Label>There is life elsewhere in the universe</HighlightedText.TextPairing.Label>
//           <HighlightedText.TextPairing.SubLabel color="text-secondary">
//             We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
//             three ways we could find it.
//           </HighlightedText.TextPairing.SubLabel>
//         </HighlightedText.TextPairing>
//       </HighlightedText.ContentGroup>
//       <HighlightedText.ContentGroup gap="1.5rem">
//         <HighlightedText.MediaBlock>
//           <HighlightedText.MediaBlock.Image
//             src="https://avatars0.githubusercontent.com/u/67131017?s=200"
//             maxWidth="2rem"
//           />
//           <HighlightedText.MediaBlock.TextPairing>
//             <HighlightedText.MediaBlock.TextPairing.Label>Label</HighlightedText.MediaBlock.TextPairing.Label>
//             <HighlightedText.MediaBlock.TextPairing.SubLabel>SubLabel</HighlightedText.MediaBlock.TextPairing.SubLabel>
//           </HighlightedText.MediaBlock.TextPairing>
//         </HighlightedText.MediaBlock>
//         <HighlightedText.MediaBlock>
//           <HighlightedText.MediaBlock.Image
//             src="https://avatars0.githubusercontent.com/u/67131017?s=200"
//             maxWidth="2rem"
//           />
//           <HighlightedText.MediaBlock.TextPairing>
//             <HighlightedText.MediaBlock.TextPairing.Label>Label</HighlightedText.MediaBlock.TextPairing.Label>
//             <HighlightedText.MediaBlock.TextPairing.SubLabel>SubLabel</HighlightedText.MediaBlock.TextPairing.SubLabel>
//           </HighlightedText.MediaBlock.TextPairing>
//         </HighlightedText.MediaBlock>
//         <HighlightedText.MediaBlock>
//           <HighlightedText.MediaBlock.Image
//             src="https://avatars0.githubusercontent.com/u/67131017?s=200"
//             maxWidth="2rem"
//           />
//           <HighlightedText.MediaBlock.TextPairing>
//             <HighlightedText.MediaBlock.TextPairing.Label>Label</HighlightedText.MediaBlock.TextPairing.Label>
//             <HighlightedText.MediaBlock.TextPairing.SubLabel>SubLabel</HighlightedText.MediaBlock.TextPairing.SubLabel>
//           </HighlightedText.MediaBlock.TextPairing>
//         </HighlightedText.MediaBlock>
//       </HighlightedText.ContentGroup>
//       <HighlightedText.ContentGroup>
//         <HighlightedText.LinkGroup alignItems={{ base: 'center', md: 'start' }}>
//           <HighlightedText.Link children="Default" variant="primary" />
//           <HighlightedText.Link children="Default" variant="primary-alt" />
//         </HighlightedText.LinkGroup>
//         <HighlightedText.Disclaimer>
//           *By clicking on Launch Mission you accept our space laws and rules for traveling through the universe.
//         </HighlightedText.Disclaimer>
//         <HighlightedText.Link size="s" children="I need help >" />
//       </HighlightedText.ContentGroup>
//       <HighlightedText.ContentGroup flexDirection="row">
//         <HighlightedText.Link size="l" leadingIcon={<IconMail />} />
//         <HighlightedText.Link size="l" leadingIcon={<IconMail />} />
//         <HighlightedText.Link size="l" leadingIcon={<IconMail />} />
//         <HighlightedText.Link size="l" leadingIcon={<IconMail />} />
//       </HighlightedText.ContentGroup>
//     </HighlightedText.Content>
//     <HighlightedText.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
//   </HighlightedText>
// );

// const Template = ({
//   variant,
//   label,
//   subLabel,
//   contentAlignment,
//   primaryCtaCopy,
//   secondaryCtaCopy,
//   tag,
//   legend,
//   mediaBlockLabel,
//   mediaBlockSubLabel,
//   disclaimer,
// }) => (
//   <HighlightedText flexDirection={{ base: 'column', lg: variant === 'left' ? 'row' : 'row-reverse' }}>
//     <HighlightedText.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
//     <HighlightedText.Content contentAlignment={contentAlignment}>
//       <HighlightedText.ContentGroup>
//         <HighlightedText.Tag>{tag}</HighlightedText.Tag>
//         <HighlightedText.Legend>{legend}</HighlightedText.Legend>
//         <HighlightedText.TextPairing variant="textpairing-header-4XL">
//           <HighlightedText.TextPairing.Label>{label}</HighlightedText.TextPairing.Label>
//           <HighlightedText.TextPairing.SubLabel>{subLabel}</HighlightedText.TextPairing.SubLabel>
//         </HighlightedText.TextPairing>
//       </HighlightedText.ContentGroup>
//       <HighlightedText.ContentGroup gap="1.5rem">
//         <HighlightedText.MediaBlock>
//           <HighlightedText.MediaBlock.Image
//             src="https://avatars0.githubusercontent.com/u/67131017?s=200"
//             maxWidth="2rem"
//           />
//           <HighlightedText.MediaBlock.TextPairing>
//             <HighlightedText.MediaBlock.TextPairing.Label>
//               {mediaBlockLabel}
//             </HighlightedText.MediaBlock.TextPairing.Label>
//             <HighlightedText.MediaBlock.TextPairing.SubLabel>
//               {mediaBlockSubLabel}
//             </HighlightedText.MediaBlock.TextPairing.SubLabel>
//           </HighlightedText.MediaBlock.TextPairing>
//         </HighlightedText.MediaBlock>
//       </HighlightedText.ContentGroup>
//       <HighlightedText.ContentGroup>
//         <HighlightedText.LinkGroup>
//           <HighlightedText.Link children={primaryCtaCopy} variant="primary" />
//           <HighlightedText.Link children={secondaryCtaCopy} variant="primary-alt" />
//         </HighlightedText.LinkGroup>
//         <HighlightedText.Disclaimer>{disclaimer}</HighlightedText.Disclaimer>
//       </HighlightedText.ContentGroup>
//     </HighlightedText.Content>
//   </HighlightedText>
// );

// export const Playground = Template.bind({});
// Playground.args = {
//   tag: 'Tag',
//   legend: 'Breaking news',
//   label: 'The next generation of care for women and families',
//   subLabel: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
//   contentAlignment: 'start',
//   variant: 'right',
//   primaryCtaCopy: 'Default',
//   secondaryCtaCopy: 'Default',
//   mediaBlockLabel: 'MediaBlock label',
//   mediaBlockSubLabel: 'MediaBlock sublabel',
//   disclaimer: '*By clicking on Launch Mission you accept our space laws and rules for traveling through the universe.',
// };
