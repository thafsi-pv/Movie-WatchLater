import React from "react";
import Layout1 from "../components/Layout1";
import { Link } from "react-router-dom";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

function SignUp() {
  return (
    <div>
      <Layout1 headingLabel="Sign up to your account">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <div className="flex w-full gap-2">
              <div className="w-1/2">
                <Label htmlFor="firsName" labelText="First Name" />
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="lastName" labelText="Last Name" />
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" labelText="Email address" />
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" labelText="password" />
              </div>
              <Input id="password" name="password" type="password" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="verifyPassword" labelText="Verify password" />
              </div>
              <Input id="verifyPassword" name="verifyPassword" type="text" />
            </div>

            <div>
              <Button type="submit" btnLable="Sign Up" onClick={""} />
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <Link
              to="/signin"
              href="#"
              className="font-semibold leading-6 text-violet-600 hover:text-violet-500">
              Sign in
            </Link>
          </p>
        </div>
      </Layout1>
    </div>
  );
}

export default SignUp;
