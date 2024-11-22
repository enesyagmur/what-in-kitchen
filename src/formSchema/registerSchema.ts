import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8, "Şifre en az 8 karakter olmalı"),
  term: yup.boolean().required("Robot değilim seçeneği seçili olmalıdır"),
});
