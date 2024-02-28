"use client";

import AppFormSelect from "@/components/form/AppFormSelect";
import AppForm from "@/components/form/Appform";
import AppFormInput from "@/components/form/Appforminput";
import Image from "next/image";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  fName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(12).required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  birthOfDate: Yup.string().required(),
});

export default function Home() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex  justify-center ">
      <div className="shadow-lg shadow-cyan-500/50 p-10 ">
        <p className=" scroll-mx-7">Create account!</p>
        <AppForm
          SubmitTitle={"Signup"}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
          defaultvalues={{}}
        >
          <div className=" flex gap-3">
            <AppFormInput
              type={"text"}
              label={"Full Name"}
              name={"fName"}
              placeholder={"Enter Your Name"}
            />
            <AppFormInput
              type={"text"}
              label={"Email"}
              name={"email"}
              placeholder={"example@gmail.com"}
            />
          </div>
          <div className=" flex gap-3">
            <AppFormInput
              type={"text"}
              label={"Country"}
              name={"country"}
              placeholder={"Enter Your Country"}
            />
            <AppFormInput
              type={"password"}
              label={"Password"}
              name={"password"}
            />
          </div>
          <div className=" flex gap-3">
            <AppFormInput
              type={"date"}
              label={"Date of Birth"}
              name={"birthOfDate"}
            />
            <AppFormSelect
              type={"text"}
              label={"Mode Of Payment"}
              name={"paymentMethod"}
              options={[{ value: "Momo", label: "Mobile Money" }]}
            />
          </div>
          <div className=" flex gap-3">
            <AppFormSelect
              label={"Gender"}
              name={"gender"}
              options={[
                { value: "", label: "Select gender" },
                {
                  value: "male",
                  label: "Male",
                },
                {
                  value: "female",
                  label: "Female",
                },
              ]}
            />
            <AppFormInput
              type={"password"}
              label={"Password"}
              name={"password"}
            />
          </div>
        </AppForm>
      </div>
    </div>
  );
}
