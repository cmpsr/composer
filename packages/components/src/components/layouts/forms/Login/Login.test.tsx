import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Login } from './Login';

describe('Login', () => {
  it('should match snapshot', () => {
    const login = renderer.create(
      <Login
        remember="Remember me"
        forgot={{ title: 'Forgot your password?' }}
      />,
    );
    const tree = login.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render asset', () => {
    const title = 'img alt';
    const { getByAltText } = render(
      <Login asset={{ contentType: 'img', title, url: '' }} />,
    );
    const asset = getByAltText(title);
    expect(asset).toBeInTheDocument();
  });
  it('should render title', () => {
    const title = 'Sign in to your account';
    const { getByText } = render(<Login title={title} />);
    const label = getByText(title);
    expect(label).toBeInTheDocument();
  });
  it('should render user name input field', () => {
    const { getByPlaceholderText } = render(<Login />);
    const nameInput = getByPlaceholderText('Name');
    expect(nameInput).toBeInTheDocument();
  });
  it('should render user password input field', () => {
    const { getByPlaceholderText } = render(<Login />);
    const nameInput = getByPlaceholderText('Password');
    expect(nameInput).toBeInTheDocument();
  });
  it('should render remember me checkbox', () => {
    const { container, getByText } = render(<Login remember="Remember me" />);
    const checkbox = container.querySelector('#remember_me');
    expect(checkbox).toBeInTheDocument();
    const rememberLabel = getByText('Remember me');
    expect(rememberLabel).toBeInTheDocument();
  });
  it('should render forgot password text', () => {
    const title = 'Forgot your password?';
    const { getByText } = render(<Login forgot={{ title }} />);
    const forgotLabel = getByText(title);
    expect(forgotLabel).toBeInTheDocument();
  });
  it('should render sig in title', () => {
    const signInTitle = 'Sign in';
    const { getByText } = render(<Login signIn={{ title: signInTitle }} />);
    const signInButton = getByText(signInTitle);
    expect(signInButton).toBeInTheDocument();
  });
  it('should call onSubmit with credentials', () => {
    const onSubmit = jest.fn();
    const userName = 'user name';
    const password = 'password';
    const { getByPlaceholderText, getByText } = render(
      <Login onSubmit={onSubmit} />,
    );
    const nameInput = getByPlaceholderText('Name');
    const passwordInput = getByPlaceholderText('Password');
    const button = getByText('Sign in');
    fireEvent.change(nameInput, { target: { value: userName } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      name: userName,
      password,
      remember: undefined,
    });
  });
  it('should call onSubmit with credentials including remember me', () => {
    const onSubmit = jest.fn();
    const userName = 'user name';
    const password = 'password';
    const { container, getByPlaceholderText, getByText } = render(
      <Login remember="Remember me" onSubmit={onSubmit} />,
    );
    const nameInput = getByPlaceholderText('Name');
    const passwordInput = getByPlaceholderText('Password');
    const button = getByText('Sign in');
    const checkbox = container.querySelector('#remember_me');
    fireEvent.change(nameInput, { target: { value: userName } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(checkbox);
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      name: userName,
      password,
      remember: true,
    });
  });
});
