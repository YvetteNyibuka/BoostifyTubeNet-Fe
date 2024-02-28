import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

export default function AppFormTextArea({
  label,
  placeholder,
  name,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(name);
  return (
    <div className=" flex  flex-col">
      <label htmlFor="">{label}</label>
      <textarea
        {...register(name)}
        name={name}
        {...rest}
        placeholder={placeholder}
        className="input input-bordered flex items-center gap-2 h-[7rem] rounded-[5px]"
      />

      {errors[name] && <ErrorMessage error={errors[name].message} />}
    </div>
  );
}
