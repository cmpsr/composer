import React, { ReactElement } from 'react';

import BodyCopy from 'models/content/BodyCopy';
import Experiment from 'models/content/Experiment';
import Feature from 'models/content/Feature';
import Footer from 'models/content/Footer';
import Grid from 'models/content/Grid';
import Group from 'models/content/Group';
import Header from 'models/content/Header';
import Hero from 'models/content/Hero';
import Link from 'models/content/Link';
import Section from 'models/content/Section';

export const componentMap = {
  BodyCopy: (item): ReactElement => <BodyCopy {...item} />,
  Experiment: (item): ReactElement => <Experiment {...item} />,
  Feature: (item): ReactElement => <Feature {...item} />,
  Footer: (item): ReactElement => <Footer {...item} />,
  Grid: (item): ReactElement => <Grid {...item} />,
  Group: (item): ReactElement => <Group {...item} />,
  Header: (item): ReactElement => <Header {...item} />,
  Hero: (item): ReactElement => <Hero {...item} />,
  Link: (item): ReactElement => <Link {...item} />,
  Section: (item): ReactElement => <Section {...item} />,
};
