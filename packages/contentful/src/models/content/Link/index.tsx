import React, { ReactElement } from 'react';
import { DEFAULT } from 'constants/index';
import {
  Link as DSMLink,
  LinkTypes,
  Asset,
  Typography,
  TypographyTypes,
} from '@cmpsr/components/lib/components/primitives';
import renderFromComponentMap from 'utils/renderFromComponentMap';

import { LinkProps } from './types';

const Link: React.FC<LinkProps> = React.memo((props) => {
  const {
    className,
    isEmbedded,
    route,
    title,
    embeddedType,
    type,
    url,
    asset,
    style,
  } = props;

  const linkProps = {
    className,
    route,
    url,
    style: style || {},
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => (
      <DSMLink {...linkProps} type={LinkTypes.Text}>
        {title && (
          <Typography tag="span" type={TypographyTypes.Link}>
            {title}
          </Typography>
        )}
      </DSMLink>
    ),
    text: (): ReactElement => (
      <DSMLink {...linkProps} type={LinkTypes.Text}>
        {title && (
          <Typography tag="span" type={TypographyTypes.Link}>
            {title}
          </Typography>
        )}
      </DSMLink>
    ),
    'primary-button': (): ReactElement => (
      <DSMLink {...linkProps} type={LinkTypes.Primary}>
        {title && (
          <Typography tag="span" type={TypographyTypes.Link}>
            {title}
          </Typography>
        )}
      </DSMLink>
    ),
    'secondary-button': (): ReactElement => (
      <DSMLink {...linkProps} type={LinkTypes.Secondary}>
        {title && (
          <Typography tag="span" type={TypographyTypes.Link}>
            {title}
          </Typography>
        )}
      </DSMLink>
    ),
    image: (): ReactElement => (
      <DSMLink className={className} {...linkProps}>
        <Asset asset={asset} controls imageClassName="mx-auto" />
      </DSMLink>
    ),
  };

  return renderFromComponentMap(componentMap, isEmbedded ? embeddedType : type);
});
export default Link;
