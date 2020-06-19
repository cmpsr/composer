import React from 'react';
import {
  Typography,
  TypographyTypes,
  Link,
  LinkTypes,
} from 'components/primitives';
import { Grid } from 'components/layouts';

import { PricingPlan2 } from '.';

export default {
  title: 'Composer/Layout/PricingPlan/PricingPlan2',
  component: PricingPlan2,
};

export const basic = () => (
  <PricingPlan2 title="Bronze" price="12" className="md:w-1/4">
    {{
      listItems: [
        'Unlimited access',
        'Monthly access',
        'Custom access',
        'Unlimited storage',
        '24/7 support',
        'One click installs',
      ],
      button: (
        <Link url="#" type={LinkTypes.Secondary}>
          <Typography tag="span" type={TypographyTypes.Button}>
            Subscribe
          </Typography>
        </Link>
      ),
    }}
  </PricingPlan2>
);

basic.story = {
  name: 'Basic',
};

export const withGrid = () => (
  <>
    <div className="px-6 text-center">
      <Typography tag="h1" type={TypographyTypes.Headline2}>
        Pricing Plans
      </Typography>
      <Typography tag="h6" type={TypographyTypes.Headline6} className="mt-2">
        Find a cosmic plan for you
      </Typography>
    </div>
    <Grid
      gridClassName="w-full px-5 py-8"
      style={{
        grid: {
          md: {
            'grid-cols': 3,
          },
          default: {
            gap: 4,
            'grid-cols': 1,
          },
        },
      }}
    >
      <PricingPlan2 title="Bronze" price="12">
        {{
          listItems: [
            'Unlimited access',
            'Monthly access',
            'Custom access',
            'Unlimited storage',
            '24/7 support',
            'One click installs',
          ],
          button: (
            <Link url="#" type={LinkTypes.Primary}>
              <Typography tag="span" type={TypographyTypes.Button}>
                Subscribe
              </Typography>
            </Link>
          ),
        }}
      </PricingPlan2>
      <PricingPlan2 title="Bronze" price="12">
        {{
          listItems: [
            'Unlimited access',
            'Monthly access',
            'Custom access',
            'Unlimited storage',
            '24/7 support',
            'One click installs',
          ],
          button: (
            <Link url="#" type={LinkTypes.Primary}>
              <Typography tag="span" type={TypographyTypes.Button}>
                Subscribe
              </Typography>
            </Link>
          ),
        }}
      </PricingPlan2>
      <PricingPlan2 title="Bronze" price="12">
        {{
          listItems: [
            'Unlimited access',
            'Monthly access',
            'Custom access',
            'Unlimited storage',
            '24/7 support',
            'One click installs',
          ],
          button: (
            <Link url="#" type={LinkTypes.Primary}>
              <Typography tag="span" type={TypographyTypes.Button}>
                Subscribe
              </Typography>
            </Link>
          ),
        }}
      </PricingPlan2>
    </Grid>
  </>
);

withGrid.story = {
  name: 'With grid',
};
