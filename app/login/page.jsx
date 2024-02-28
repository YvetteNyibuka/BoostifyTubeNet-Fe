"use client";

import AppFormInput from "@/components/form/AppFormInput";
import AppForm from "@/components/form/Appform";
import * as Yup from "yup";


const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(12).required(),
});

export default function Login() {
    const onSubmit = (data) => {
      console.log(data);
    };

  return (
    <div className=" grid grid-cols gap-3 justify-center">
      <div className=" w-80 shadow-lg shadow-cyan-500/50  p-10">
        <p>Login Here?</p>
        <AppForm
          SubmitTitle={"Login"}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
          defaultvalues={{}}
        >
          <div className=" flex  flex-col gap-2">
            <AppFormInput
              type={"text"}
              label={"Email"}
              name={"email"}
              placeholder={"example@gmail.com"}
            />
            <AppFormInput
              type={"password"}
              label={"Password"}
              name={"password"}
              placeholder={"************"}
            />
          </div>
        </AppForm>
      </div>
    </div>
  );
}
