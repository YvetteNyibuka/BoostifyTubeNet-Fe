
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
export default function AppFormInputDate({
    label,
    type,
    placeholder,
    name,
}
) {
    const {
    register,
    formState: { errors },
  } = useFormContext();
    return (
      <div className=" flex  flex-col">
        <label htmlFor="">{label}</label>
        <input
          type={type}
          {...register(name)}
          name={name}
          placeholder={placeholder}
          className="input input-bordered flex items-center gap-2 h-[2.4rem] rounded-[5px] w-[15.5rem]"
        />

        {errors[name] && <ErrorMessage error={errors[name].message} />}
      </div>
    );
}

