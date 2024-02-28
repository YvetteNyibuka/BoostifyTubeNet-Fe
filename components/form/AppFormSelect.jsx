import { useFormContext } from "react-hook-form";
import Select from "react-select";
export default function AppFormSelect({ label, options, name, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className=" flex flex-col">
      <label>{label}</label>
      <select
        {...register(name)}
        className=" input input-bordered flex items-center gap-2 h-[2.4rem] rounded-[5px] w-[13.5rem]"
      >
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}
