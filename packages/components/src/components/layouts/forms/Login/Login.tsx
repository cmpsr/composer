import React from "react";
import cn from "classnames";

import {
  Button,
  ButtonTypes,
  Typography,
  TypographyTypes,
  Icon,
  Asset,
} from "components/primitives";
import { useState, ChangeEvent } from "react";
import { TextField } from "components/primitives/form/TextField";
import { Link } from "components/primitives/Link";
import { Asset as AssetType } from "types";

type Props = {
  className?: string;
  asset?: AssetType;
  title?: string;
  remember?: string;
  forgot?: {
    title?: string;
    url?: string;
    route?: { slug: string };
  };
  signIn?: {
    icon?: React.ReactNode;
    title?: string;
  };
  onSubmit?: (credentials: {
    name: string;
    password?: string;
    remember?: boolean;
  }) => void;
};

export const Login = ({
  className,
  asset,
  title,
  remember,
  forgot,
  signIn = { title: "Sign in" },
  onSubmit,
}: Props) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [rememberMe, setRememberMe] = useState<boolean>();

  const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.currentTarget.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.currentTarget.value);
  const onChangeRememberMe = (event: ChangeEvent<HTMLInputElement>) =>
    setRememberMe(event.currentTarget.checked);
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name: username, password, remember: rememberMe });
  };

  return (
    <div
      className={cn(
        "h-screen flex items-center justify-center bg-gray-50 px-4 lg:px-8",
        className
      )}
    >
      <div className="max-w-md w-full">
        <div>
          {asset && <Asset className="mx-auto h-20 w-auto" asset={asset} />}
          <Typography
            tag="h2"
            type={TypographyTypes.Headline4}
            className="text-center mt-8"
          >
            {title}
          </Typography>
        </div>
        <form className="mt-8" onSubmit={onFormSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <TextField
                ariaLabel="Name"
                name="name"
                placeholder="Name"
                required
                onChange={onChangeUsername}
              />
            </div>
            <div className="mt-2">
              <TextField
                ariaLabel="Password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={onChangePassword}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              {remember && (
                <>
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="form-checkbox h-4 w-4 fill-primary-100 transition duration-150 ease-in-out"
                    onChange={onChangeRememberMe}
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900"
                  >
                    {remember}
                  </label>
                </>
              )}
            </div>

            <div className="text-sm leading-5">
              {forgot?.title && (
                <Link
                  className="font-medium fill-primary-100 focus:outline-none focus:underline transition ease-in-out duration-150"
                  url={forgot.url}
                  route={forgot.route}
                >
                  {forgot.title}
                </Link>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Button
              htmlType="submit"
              type={ButtonTypes.Primary}
              className="w-full relative"
            >
              <span className="absolute left-0 px-4">
                <Icon className="fill-current" width={24} height={24}>
                  {signIn?.icon}
                </Icon>
              </span>
              {signIn?.title}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
