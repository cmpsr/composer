import { createContext } from '@chakra-ui/react-utils';

interface NavigationContextProps {
  showBaseNavigation: boolean;
  keepActionsAlwaysVisible: boolean;
}

export const [NavigationProvider, useNavigationContext] = createContext<NavigationContextProps>({
  name: 'NavigationContext',
});
