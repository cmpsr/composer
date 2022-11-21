export interface LoginProps {
  loginLabel: string;
  onLogin: (user: string) => void;
  isDisabled: boolean;
}
