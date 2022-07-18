import { getter } from '@progress/kendo-react-common';

const userNameGetter = getter('username');
const passwordGetter = getter('password');
const rePasswordGetter = getter('rePassword');

export const formValidator = (values) => {
  const username = userNameGetter(values);
  const password = passwordGetter(values);
  const rePassword = rePasswordGetter(values);

  if (username && password && rePassword) {
    return {};
  }

  return {
    VALIDATION_SUMMARY: "Please fill in the following fields.",
    ["username"]: !username ? "User Name is required." : "",
    ["password"]: !password
      ? 'Password is required'
      : password.length < 8 ? 'Password should be least 8 characters long' : '',
    ["rePassword"]: !rePassword
      ? 'Confirm passwrod is required'
      : rePassword !== password ? 'Confirm password must be like password' : ''
  };
}