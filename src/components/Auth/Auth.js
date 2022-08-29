import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import LoginForm from "./LoginForm";
import { SignUp } from "./SignUp";

export default function Auth() {
  let { path } = useRouteMatch();
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${path}/login`} component={LoginForm}></Route>
        <Route path={`${path}/signup`} component={SignUp}></Route>
        <Route path={`${path}/forget`} component={ForgetPassword}></Route>
        <Redirect to={{ pathname: "/auth/login" }} />
      </Switch>
    </BrowserRouter>
  );
}
