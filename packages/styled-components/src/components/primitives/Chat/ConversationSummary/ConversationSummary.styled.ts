import styled from 'styled-components';
import { getTheme } from 'utils/getTheme';
import { Typography } from 'components/primitives/Typography';
import { Icon } from 'components/primitives/Icon';
import { customCss } from 'utils/customCss';

interface CssProps {
  css?: string;
}

interface Props extends CssProps {
  theme: any;
}

const truncate = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledContainer = styled.div<Props>`
  background-color: transparent;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  &.active {
    background-color: ${(props) => getTheme(props).colors.fillBackground400};
  }

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    border-radius: 0.25rem;
    &:hover {
      background-color: ${(props) => getTheme(props).colors.fillBackground300};
    }
  }
`;

export const StyledProfileContainer = styled.div<Props>`
  display: flex;
  padding-right: 0.75rem;

  @media (min-width: ${(props) => getTheme(props).breakpoints.sd}) {
    padding-right: 1.25rem;
  }
`;

export const StyledAvatarWrapper = styled.div`
  min-width: 3rem;
`;

export const StyledProfileWrapper = styled.div`
  padding-left: 0.25rem;
  max-width: 8.75rem;

  @media (min-width: ${(props) => getTheme(props).breakpoints.md}) {
    max-width: 13rem;
  }
`;

export const StyledProfileTitle = styled(Typography)`
  margin-top: 0rem;
  margin-bottom: 0rem;
  ${truncate}
`;

export const StyledProfileDescription = styled(Typography)`
  margin-top: 0rem;
  margin-bottom: 0.25rem;
  ${truncate}
`;

export const StyledProfileMessage = styled(Typography)<Props>`
  margin-top: 0rem;
  margin-bottom: 0rem;
  ${truncate}
  color: ${(props) => getTheme(props).Typography.colors.dark50};

  &.error {
    color: ${(props) => getTheme(props).colors.fillSystemError};
  }

  ${(props) => customCss(props)};
`;

export const StyledNotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledNotificationTime = styled(Typography)`
  margin-bottom: 0.25rem;
`;

export const StyledIcon = styled(Icon)<Props>`
  fill: currentColor;
  color: ${(props) => getTheme(props).colors.fillSystemError};
`;
