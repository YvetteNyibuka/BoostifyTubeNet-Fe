import { useFormContext } from "react-hook-form";

export default function AppFormInput({
  label,
  type,
  placeholder,
  name,
}) {
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
        className="input input-bordered flex items-center gap-2 h-[2.4rem] rounded-[5px]" 
      />

      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}
