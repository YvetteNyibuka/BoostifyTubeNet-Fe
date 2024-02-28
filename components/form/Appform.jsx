"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export default function AppForm({
  onSubmit,
  defaultvalues,
  children,
  SubmitTitle,
  validationSchema,
}) {
  const method = useForm({
    defaultValues: {
      ...defaultvalues,
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(onSubmit)}
        method="POST"
        className=" flex flex-col gap-1"
      >
        {children}
        <SubmitButton title={SubmitTitle} />
      </form>
    </FormProvider>
  );
}

const SubmitButton = ({ title }) => {
  return (
    <>
      <button
        className="btn mt-3 btn-block bg-yellow-400 hover:bg-blue-950 hover:text-white h-4"
        type="submit"
      >
        {title}
      </button>
    </>
  );
};
