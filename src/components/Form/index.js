import { useFormik } from "formik";
import { Input } from "../Input";
import { Button } from "../Button";
import { registerSchema } from "../../schema/register";
import { useState } from "react";

export default function Form() {
  const [showErrors, setShowErrors] = useState(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);
    },
  });

  const onSubmit = (e) => {
    setShowErrors(true);
    handleSubmit(e);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="p-5 rounded-sm shadow-xl bg-slate-800 w-2/3"
    >
      <h1 className="text-center text-zinc-100 text-lg mb-5">Cadastro</h1>
      <div className="flex flex-col gap-y-2">
        <Input
          type="text"
          name="name"
          label="Nome"
          value={values.name}
          onChange={handleChange}
          error={showErrors && errors.name}
        />
        <Input
          type="email"
          name="email"
          label="E-mail"
          value={values.email}
          onChange={handleChange}
          error={showErrors && errors.email}
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          value={values.password}
          onChange={handleChange}
          error={showErrors && errors.password}
        />
      </div>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}
