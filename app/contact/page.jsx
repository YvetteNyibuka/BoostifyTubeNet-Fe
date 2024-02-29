"use client";

import AppFormInput from "../../components/form/AppFormInput";
import AppFormTextArea from "../../components/form/AppFormTextArea";
import AppForm from "../../components/form/Appform";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import * as Yup from "yup";
import { useState } from "react";
import { Notify } from "notiflix";
import axios from "axios";
export default function Contact() {
  const loginSchema = Yup.object().shape({
    Email: Yup.string().email().required(),
    Name: Yup.string().required(),
    Message: Yup.string().required(),
  });
  const onSubmit = (data) => {
    console.log(data);
  };



 const [formData, setFormData] = useState({
   Name: "",
   Email: "",
   Message: "",
 });
 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
     console.log(formData);
     await axios.post(
       "https://boostifytube-network-api.onrender.com/api/v1/user/contact",
       formData
     );
     Notify.success("Message sent sucessfully");
   } catch (error) {
     Notify.failure(error.message);
     console.log(error.response);
   }
 };



  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col shadow-lg shadow-cyan-500/50 p-10 gap-5 ">
        <p className=" flex justify-center text-lg font-bold">
          {" "}
          Contact Us Here!!
        </p>

        <div className="  flex gap-7  ">
          <div className=" mt-1 flex flex-col gap-9">
            <h2 className=" font-bold">Let's get in Touch with You!</h2>
            <p className=" flex gap-2">
              <IoLocationSharp className=" mt-1" />
              Kigali KN403
            </p>
            <p className=" flex gap-2">
              <FaPhone className=" mt-1" />
              +250787615313
            </p>
            <p className=" flex gap-2">
              <MdOutlineEmail className=" mt-1" />
              origingroup@gmail299.com
            </p>
            <div className=" mt-10 flex gap-5">
              <FaSquareXTwitter className=" text-4xl" />
              <FaInstagram className=" text-4xl" />
              <FaWhatsappSquare className=" text-4xl" />
            </div>
          </div>

          <div className="  w-80  grid grid-cols ">
            <AppForm
              SubmitTitle={"Submit"}
              validationSchema={loginSchema}
              onSubmit={handleSubmit()}
              // defaultvalues={{
              //   email: "",
              //   password: "",
              // }}
            >
              <div className=" flex  flex-col gap-1">
                <AppFormInput
                  type={"name"}
                  label={"Full Name"}
                  name={"Name"}
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder={"Enter Your Name"}
                />

                <AppFormInput
                  type={"text"}
                  label={"Email"}
                  name={"Email"}
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder={"example@gmail.com"}
                />

                <AppFormTextArea
                  type={"text"}
                  label={"Message"}
                  name={"Message"}
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder={"Enter Your Message"}
                />
              </div>
            </AppForm>
          </div>
        </div>
      </div>
    </div>
  );
}
