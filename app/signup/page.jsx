"use client";

import AppFormInputDate from "@/components/form/AppFormInputDate";
import AppFormPhoneInput from "@/components/form/AppFormPhoneInput";
import AppFormSelect from "@/components/form/AppFormSelect";
import AppForm from "@/components/form/Appform";
import AppFormInput from "@/components/form/Appforminput";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import * as Yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const loginSchema = Yup.object().shape({
  fName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(12).required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  role: Yup.string().required(),
  birthOfDate: Yup.string().required(),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export default function Home() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const [country, setCountry] = useState();

  const fetchCountry = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");

      setCountry(
        response?.data?.map((item) => ({
          value: item.name.common,
          label: item.name.common,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountry();
  }, [country]);
  return (
    <div className=" flex  justify-center ">
      <div className="shadow-lg shadow-cyan-500/50 p-10 ">
        <p className=" scroll-mx-7  flex justify-center text-lg font-bold">Create account!</p>
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
              label={"PhoneNumber"}
              name={"phoneNumber"}
              type={"number"}
            />
            {/* <AppFormPhoneInput label={"Phone"} country={"rw"} /> */}
            <AppFormSelect
              type={"text"}
              label={"Country"}
              name={"country"}
              options={
                [{ value: "", label: "Select country --" }].concat(country) || [
                  {
                    label: "Rwanda",
                    value: "Rwanda",
                  },
                  {
                    label: "Rwanda",
                    value: "Rwanda",
                  },
                ]
              }
              placeholder={"Enter Your Country"}
            />
          </div>
          <div className=" flex gap-3">
            <AppFormSelect
              label={"Signup As"}
              name={"role"}
              options={[
                { value: "", label: "Select Role" },
                {
                  value: "Youtuber",
                  label: "Youtube",
                },
                {
                  value: "Client",
                  label: "Client",
                },
              ]}
            />
            <AppFormInputDate
              type={"date"}
              label={"Date of Birth"}
              name={"birthOfDate"}
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
        <p>If Your Have any Account Please Login Here!! <Link href="/login" className=" text-amber-500 hover:text-cyan-700">Login</Link></p>
      </div>
    </div>
  );
}
