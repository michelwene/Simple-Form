import * as yup from "yup";
export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(20, "A senha deve ter no máximo 20 caracteres"),
});
