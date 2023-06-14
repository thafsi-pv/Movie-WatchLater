import { useState } from "react";
import Layout1 from "../components/Layout1";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const [mail, setMail] = useState();
  console.log("🚀 ~ file: ForgotPassword.jsx:10 ~ ForgotPassword ~ mail:", mail)

  const handleInputChange = (e) => {
    setMail(e.target.value);
  };
  return (
    <Layout1 headingLabel="Forgot Password">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" autoComplete="off">
          <div>
            <Label htmlFor="email" labelText="Email address" />
            <Input
              id="email"
              name="email"
              state={mail}
              handleChange={handleInputChange}
              type="email"
            />
          </div>

          <div>
            <Button type="button" btnLable="Send Mail" />
          </div>
        </form>
      </div>
      <div>
        <Toaster />
      </div>
    </Layout1>
  );
};

export default ForgotPassword;
