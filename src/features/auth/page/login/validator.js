import { getter } from '@progress/kendo-react-common';

const userNameGetter = getter('username');
const passwordGetter = getter('password');

export const formValidator = (values) => {
  const username = userNameGetter(values);
  const password = passwordGetter(values);

  if (username && password) {
    return {};
  }

  return {
    VALIDATION_SUMMARY: "Please fill in the following fields.",
    ["username"]: !username ? "User Name is required." : "",
    ["password"]: !password ? 'Password is required' : '',
  };
}