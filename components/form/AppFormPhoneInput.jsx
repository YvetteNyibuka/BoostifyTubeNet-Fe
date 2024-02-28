import { useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPhoneInput({ label, name, country }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor=""> {label}</label>
      <PhoneInput
        value=""
        country={country}
        {...register("phone")}
        className="input  outline-none border-none flex items-center gap-2 h-[2.4rem] w-[40rem] focus:border-none focus:outline-none rounded-[5px]"
      />
      {errors[name] && <ErrorMessage error={errors[name].message} />}
    </div>
  );
}
