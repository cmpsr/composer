import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Icon, Typography, TypographyTypes } from 'components/primitives';
import { TypographyMode } from '../../Typography';
import { getItemClasses } from 'utils/getDropdownClasses';
import { TargetOption } from 'components/primitives/Link';

export const LINK_ITEM_DEFAULT_TEST_ID = 'linkItem';

type Props = {
  className?: string;
  icon?: ReactNode;
  url?: string;
  route?: { slug: string };
  title?: string;
  subTitle?: string;
  target?: TargetOption;
  testId?: string;
};

export const LinkItem = ({
  className,
  url,
  route,
  title,
  icon,
  subTitle,
  target,
  testId = LINK_ITEM_DEFAULT_TEST_ID,
}: Props) => {
  const { wrapper, iconClasses, titleWrapper } = getItemClasses();

  return (
    <a
      className={cn(wrapper, className)}
      href={route ? route.slug : url}
      target={target}
      data-testid={testId}
    >
      {icon && <Icon className={iconClasses}>{icon}</Icon>}
      <div className={titleWrapper}>
        {title && (
          <Typography tag="span" type={TypographyTypes.Body}>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography
            tag="span"
            type={TypographyTypes.Detail}
            mode={TypographyMode.Dark50}
          >
            {subTitle}
          </Typography>
        )}
      </div>
    </a>
  );
};
