import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ContentfulProvider } from '../context';
import { ComponentRenderer } from './ComponentRenderer';

const Header = ({ links }): ReactElement => (
  <header>
    {links.map((link, index) => (
      <a key={`link-${index}`} href={link.href}>{link.label}</a>
    ))}
  </header>
);
const Hero = ({ title }): ReactElement => <div className="hero"><h1>{title}</h1></div>;
const Footer = ({ year }): ReactElement => <footer>&copy;{year}</footer>;
const HeroOverride = ({ title }): ReactElement => <div className="hero"><h2>{title}</h2></div>;

const HeaderData = { __typename: 'Header', sys: { id: 'header-id' }, links: [{ href: '/', label: 'Home' }] };
const HeroData = { __typename: 'Hero', sys: { id: 'hero-id' }, title: 'Hero Title' };
const FooterData = { __typename: 'Footer', sys: { id: 'footer-id' }, year: 2020 };
const BadData = { __typename: 'Bad', sys: { id: 'bad-id' }, title: 'It bad.' };

describe('ComponentRenderer', () => {
  const componentMap = {
    Header,
    Hero,
    Footer,
  };

  it('renders all componentMap items based on data', () => {
    const { container } = render((
      <ContentfulProvider componentMap={componentMap}>
        <ComponentRenderer data={[HeaderData, HeroData, FooterData]} />
      </ContentfulProvider>
    ));

    expect(container).toMatchInlineSnapshot(`
      <div>
        <header>
          <a
            href="/"
          >
            Home
          </a>
        </header>
        <div
          class="hero"
        >
          <h1>
            Hero Title
          </h1>
        </div>
        <footer>
          ©
          2020
        </footer>
      </div>
    `);
  });

  it('renders only components that are mapped in componentMap', () => {
    const { container } = render((
      <ContentfulProvider componentMap={componentMap}>
        <ComponentRenderer data={[HeaderData, HeroData, FooterData, BadData]} />
      </ContentfulProvider>
    ));

    expect(container).toMatchInlineSnapshot(`
      <div>
        <header>
          <a
            href="/"
          >
            Home
          </a>
        </header>
        <div
          class="hero"
        >
          <h1>
            Hero Title
          </h1>
        </div>
        <footer>
          ©
          2020
        </footer>
      </div>
    `);
  });

  it('renders no components', () => {
    const { container } = render((
      <ContentfulProvider componentMap={componentMap}>
        <ComponentRenderer data={[BadData, BadData, BadData]} />
      </ContentfulProvider>
    ));

    expect(container).toMatchInlineSnapshot('<div />');
  });

  it('renders override components', () => {
    const { container } = render((
      <ContentfulProvider componentMap={componentMap}>
        <ComponentRenderer
          componentMap={{ Hero: HeroOverride }}
          data={[HeaderData, HeroData, FooterData]}
        />
      </ContentfulProvider>
    ));

    expect(container).toMatchInlineSnapshot(`
      <div>
        <header>
          <a
            href="/"
          >
            Home
          </a>
        </header>
        <div
          class="hero"
        >
          <h2>
            Hero Title
          </h2>
        </div>
        <footer>
          ©
          2020
        </footer>
      </div>
    `);
  });
});
