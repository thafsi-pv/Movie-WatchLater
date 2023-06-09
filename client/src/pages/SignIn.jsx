import React from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import Layout1 from "../components/Layout1";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Layout1 headingLabel="Sign in to your account">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="email" labelText="Email address" />
            <Input id="email" name="email" type="email" autoComplete="email" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password" labelText="password" />
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-violet-600 hover:text-violet-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <Input id="password" name="password" type="password" />
          </div>

          <div>
            <Button type="submit" btnLable="Sign in" onClick={handleLogin} />
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/signup"
            href="#"
            className="font-semibold leading-6 text-violet-600 hover:text-violet-500">
            Sign up
          </Link>
        </p>
      </div>
    </Layout1>
  );
}

export default SignIn;
