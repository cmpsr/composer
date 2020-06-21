import React from 'react';
import {
  Typography,
  TypographyTypes,
  Link,
  LinkTypes,
} from 'components/primitives';
import { PricingPlan3 } from '.';

import { Grid } from 'components/layouts';

export default {
  title: 'Composer/Layout/PricingPlan/PricingPlan3',
  component: PricingPlan3,
};

export const basic = () => (
  <PricingPlan3 title="Bronze" price="12">
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
        <Link url="#" type={LinkTypes.Primary} className="lg:w-56 lg:ml-40">
          <Typography tag="span" type={TypographyTypes.Button}>
            Subscribe
          </Typography>
        </Link>
      ),
    }}
  </PricingPlan3>
);

basic.story = {
  name: 'Basic',
};

export const withGrid = () => (
  <div>
    <Grid
      gridClassName="w-full px-5 py-8"
      style={{
        grid: {
          md: {
            'grid-cols': 1,
          },
          default: {
            gap: 4,
            'grid-cols': 1,
          },
        },
      }}
    >
      <div className="px-6 text-center md:text-left">
        <Typography tag="h1" type={TypographyTypes.Headline2}>
          Pricing Plans
        </Typography>
        <Typography tag="h6" type={TypographyTypes.Headline6} className="mt-2">
          Find a cosmic plan for you
        </Typography>
      </div>
      <PricingPlan3 title="Bronze" price="12">
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
            <Link url="#" type={LinkTypes.Primary} className="lg:w-56 lg:ml-40">
              <Typography tag="span" type={TypographyTypes.Button}>
                Subscribe
              </Typography>
            </Link>
          ),
        }}
      </PricingPlan3>
      <PricingPlan3 title="Bronze" price="12">
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
            <Link url="#" type={LinkTypes.Primary} className="lg:w-56 lg:ml-40">
              <Typography tag="span" type={TypographyTypes.Button}>
                Subscribe
              </Typography>
            </Link>
          ),
        }}
      </PricingPlan3>
      <PricingPlan3 title="Bronze" price="12">
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
            <Link url="#" type={LinkTypes.Primary} className="lg:w-56 lg:ml-40">
              <Typography tag="span" type={TypographyTypes.Button}>
                Subscribe
              </Typography>
            </Link>
          ),
        }}
      </PricingPlan3>
    </Grid>
  </div>
);

withGrid.story = {
  name: 'With grid',
};
