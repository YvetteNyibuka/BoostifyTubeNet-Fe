"use client";

import AppFormInput from "../../components/form/AppFormInput";
import AppFormTextArea from "../../components/form/AppFormTextArea";
import AppForm from "../../components/form/Appform";
import * as Yup from "yup";
export default function Contact() {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(12).required(),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-80  grid grid-cols gap-3">
      <div>
        <p>
          
        </p>
      </div>
      <AppForm
        SubmitTitle={"Submit"}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        defaultvalues={{
          email: "",
          password: "",
        }}
      >
        <div className=" flex  flex-col gap-2">
          <AppFormInput
            type={"name"}
            label={"Full Name"}
            name={"date"}
            placeholder={"Enter Your Name"}
          />

          <AppFormInput
            type={"text"}
            label={"Email"}
            name={"email"}
            placeholder={"example@gmail.com"}
          />

          <AppFormTextArea
            type={"text"}
            label={"Message"}
            name={"message"}
            placeholder={"Enter Your Message"}
          />
        </div>
      </AppForm>
    </div>
  );
}
